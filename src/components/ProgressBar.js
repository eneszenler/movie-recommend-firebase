import React, {useEffect} from "react";
import useStorage from "../hooks/useStorage";
import {Spinner} from "@chakra-ui/react";

function Progressbar({movie, setMovie, setIsModalOpen}) {
  const {movieFeature} = useStorage(movie);

  useEffect(() => {
    if (movieFeature) {
      setMovie(null);
      setIsModalOpen(false);
    }
  }, [movieFeature]);

  return <Spinner />;
}

export default Progressbar;
