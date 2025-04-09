import styled from "styled-components";
import ImgSlider from "./ImgSlider.js";
import NewDisney from "./NewDisney.js";
import Originals from "./Originals.js";
import Recommends from "./Recommends.js";
import Trending from "./Trending.js";
import Viewers from "./Viewers.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";
import { setMovies } from "../features/movie/movieSlice.js";
import { selectUserName } from "../features/user/userSlice.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [movies, setMoviesState] = useState({
    recommends: [],
    newDisneys: [],
    originals: [],
    trending: []
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      const tempMovies = {
        recommends: [],
        newDisneys: [],
        originals: [],
        trending: []
      };

      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        switch (data.type) {
          case "recommend":
            tempMovies.recommends.push(data);
            break;
          case "new":
            tempMovies.newDisneys.push(data);
            break;
          case "original":
            tempMovies.originals.push(data);
            break;
          case "trending":
            tempMovies.trending.push(data);
            break;
          default:
            break;
        }
      });

      setMoviesState(tempMovies);
      dispatch(
        setMovies({
          recommend: tempMovies.recommends,
          newDisney: tempMovies.newDisneys,
          original: tempMovies.originals,
          trending: tempMovies.trending,
        })
      );
    });

    return () => unsubscribe();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
