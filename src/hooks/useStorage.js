import {useState, useEffect} from "react";
import {projectStorage, projectFirestore, timestamp} from "../firebase/config";

const useStorage = (movie) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [movieFeature, setMovieFeature] = useState(null);

  useEffect(() => {
    // references
    const collectionRef = projectFirestore.collection("movies");
    collectionRef.add(movie);
    setMovieFeature(movie);
    // storaageRef.put(movie).on(
    //   "state_changed",
    //   (snap) => {
    //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //     setProgress(percentage);
    //   },
    //   (err) => {
    //     setError(err);
    //   },
    //   async () => {
    //     collectionRef.add(movie);
    //     setMovieFeature(movie);
    //   }
    // );
  }, [movie]);

  return {progress, movieFeature, error};
};

export default useStorage;
