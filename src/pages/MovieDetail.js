import {Flex} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {useMoviesLister} from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

function MovieDetail() {
  const nameOfMovie = useParams();
  const movies = useMoviesLister();

  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    movies.forEach((item) => {
      if (item.movie === nameOfMovie.movie_name) {
        setSelectedMovie(item);
      }
    });
  }, [movies]);

  return (
    <>
      <Header />
      {selectedMovie && (
        <Container>
          <Row className="detail-container">
            <Col md={4}>
              <div className="detail-image">
                <img src={selectedMovie.imageUrl} alt={selectedMovie.movie} />
              </div>
            </Col>
            <Col md={8}>
              <Flex
                flexDirection={"column"}
                justifyContent={"space-between"}
                w={"100%"}
                h={"100%"}
              >
                <div>
                  <div className="detail-title">
                    <h1>{selectedMovie.movie}</h1>
                  </div>
                  <div className="detail-description">
                    <p>{selectedMovie.description}</p>
                  </div>
                </div>
                <div className="detail-title">
                  <p>
                    Added by <span>{selectedMovie.name}</span>
                  </p>
                </div>
              </Flex>
            </Col>
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
}

export default MovieDetail;
