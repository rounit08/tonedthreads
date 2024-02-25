import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsVU_njcptdijfbK9mOn4LdjwIS_8ncnM",
  authDomain: "tonedthreads.firebaseapp.com",
  projectId: "tonedthreads",
  storageBucket: "tonedthreads.appspot.com",
  messagingSenderId: "691107520565",
  appId: "1:691107520565:web:8ddae5f1c42d2d21d6917c",
  measurementId: "G-PTXNCF2LQ8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

async function fetchCombinations() {
  const querySnapshot = await getDocs(collection(firestore, "Combinations"));
  const combinations = [];
  querySnapshot.forEach((doc) => {
    combinations.push({ id: doc.id, data: doc.data() });
  });
  return combinations;
}

export { fetchCombinations };
