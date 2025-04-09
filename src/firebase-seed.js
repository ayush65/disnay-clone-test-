import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7GRZHeP8yBUK-kZsXA6ViroMjQZOVxFQ",
  authDomain: "mahakumbh-endless-runner-2024.firebaseapp.com",
  projectId: "mahakumbh-endless-runner-2024",
  storageBucket: "mahakumbh-endless-runner-2024.firebasestorage.app",
  messagingSenderId: "786224550632",
  appId: "1:786224550632:web:b00aaa6b7297cfde7e2f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const movies = [
  {
    backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68E2E277C4A723A7B92D3CAE67E5D3C4857DB7EC45/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1961A9FC33C01BA39AC208C5C951A5B/scale?width=400&aspectRatio=1.78&format=jpeg",
    description: "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    subTitle: "2015 • 1h 35m • Coming of Age, Family, Animation",
    title: "Inside Out",
    titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",
    type: "recommend"
  },
  {
    backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",
    description: "Garfield is adopted by a cartoonist, living a luxurious life eating lasagna. When his owner brings home a dog, Garfield feels neglected and tries to get rid of his new roommate.",
    subTitle: "2004 • 1h 20m • Comedy, Kids, Animation",
    title: "Garfield",
    titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",
    type: "new"
  },
  {
    backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",
    description: "A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
    subTitle: "2018 • 7m • Family, Fantasy, Kids, Animation",
    title: "Bao",
    titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",
    type: "original"
  },
  {
    backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",
    description: "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
    subTitle: "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
    title: "Tangled",
    titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
    type: "trending"
  }
];

const seedDatabase = async () => {
  try {
    const moviesRef = collection(db, 'movies');
    
    for (const movie of movies) {
      await addDoc(moviesRef, movie);
      console.log(`Added movie: ${movie.title}`);
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Run the seeding function
seedDatabase();
