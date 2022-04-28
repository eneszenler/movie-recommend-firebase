import {Flex, Heading} from "@chakra-ui/react";
import React from "react";
import {Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyMovieCard from "../components/MyMovieCard";
import {useMoviesLister} from "../firebase/config";

function MyMovies() {
  const data = useParams();
  const movies = useMoviesLister();
  return (
    <>
      <Header />
      <Flex>
        <Heading color={"#fff"} textAlign="center" w="100%" marginTop={6}>
          My Movies
        </Heading>
      </Flex>
      <Container className="image-grid">
        <Row>
          {movies &&
            movies.map((movie) => (
              <MyMovieCard
                key={movie.id}
                id={movie.id}
                imageUrl={movie.imageUrl}
                movieName={movie.movie}
                description={movie.description}
                userId={movie.uid}
                currentUserId={data.user_id}
              />
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MyMovies;
