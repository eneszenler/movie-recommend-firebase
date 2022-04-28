import React from "react";
import {Container, Row} from "react-bootstrap";
import {useMoviesLister} from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import MovieCard from "./MovieCard";
import {useCurrentUser} from "../hooks/useCurrentUser";

function ImageGrid() {
  const movies = useMoviesLister();

  return (
    <Container className="image-grid">
      <Row>
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imageUrl={movie.imageUrl}
              movieName={movie.movie}
              description={movie.description}
              userId={movie.uid}
            />
          ))}
      </Row>
    </Container>
  );
}

export default ImageGrid;
