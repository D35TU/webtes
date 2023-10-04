import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDg_6S0D145FDmO5_iXjzBYGMOFgVgZdA8",
  authDomain: "iot-infus-a7d3b.firebaseapp.com",
  databaseURL: "https://iot-infus-a7d3b-default-rtdb.firebaseio.com",
  projectId: "iot-infus-a7d3b",
  storageBucket: "iot-infus-a7d3b.appspot.com",
  messagingSenderId: "819028238139",
  appId: "1:819028238139:web:c0f34fa7b5754045ab211e",
  measurementId: "G-F9DD1XPR9R"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);