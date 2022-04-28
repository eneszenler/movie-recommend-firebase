import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import env from "../env.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {useEffect, useState} from "react";
import {useCurrentUser} from "../hooks/useCurrentUser";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.apikey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
const projectStorage = firebase.storage();
export const db = getFirestore(app);

const moviesRef = collection(db, "movies");

export const useMoviesLister = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return onSnapshot(moviesRef, (snapshot) => {
      setMovies(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {id: doc.id, ...data};
        })
      );
    });
  }, []);

  return movies;
};

export const deleteProduct = (id) => {
  deleteDoc(doc(db, "movies", id));
};

export const addProduct = ({movie}) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  addDoc(moviesRef, movie);
};

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, {displayName: name});
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const forgotPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

export const logOut = async () => {
  await signOut(auth);
};

export {projectFirestore, projectStorage, timestamp};
