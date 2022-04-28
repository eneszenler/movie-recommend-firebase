import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {deleteProduct} from "../firebase/config";
import {useCurrentUser} from "../hooks/useCurrentUser";

function MyMovieCard({currentUserId, userId, id, description, imageUrl, movieName}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = React.useRef();

  const handleClick = () => {
    deleteProduct(id);
    onClose();
  };

  return (
    <>
      {currentUserId === userId && (
        <Col sm={12} md={6} lg={3}>
          <Link to={`/${movieName}`}>
            <div className="card">
              <img src={imageUrl} />
              <div className="descriptions">
                <h1>{movieName}</h1>
                <p>{description}</p>
              </div>
            </div>
          </Link>
          <Flex w={"100%"} marginTop={"-25px"} marginBottom={"10px"}>
            <Button onClick={onOpen} w={"100%"} colorScheme="red">
              Delete
            </Button>
          </Flex>

          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Movie
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>

                  <Button colorScheme="red" onClick={handleClick} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Col>
      )}
    </>
  );
}

export default MyMovieCard;
