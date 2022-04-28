import React, {useEffect, useState} from "react";
import {AddIcon} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {useToast} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import {Container} from "react-bootstrap";
import {useCurrentUser} from "../hooks/useCurrentUser";

function UploadForm({uid}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const [movie, setMovie] = useState();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [movieUrl, setMovieUrl] = useState("");

  const handleClick = () => {
    if (movieName && description && name && movieUrl) {
      setMovie({
        movie: movieName,
        description: description,
        name: name,
        imageUrl: movieUrl,
        uid: uid,
      });
      setMovieName("");
      setDescription("");
      setName("");
      setMovieUrl("");
      setIsModalOpen(true);
    } else {
      toast({
        title: "Movie could not be added.",
        description: "Please fill out the form completely.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      onClose();
      toast({
        title: "Your movie succesfuly added",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className="upload">
        <Button onClick={onOpen} fontWeight={"extrabold"} colorScheme="green">
          Add Movie
        </Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="movie">Movie Name</FormLabel>
                <Input
                  id="movie"
                  type="text"
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="movieUrl">Movie Image (Url)</FormLabel>
                <Input
                  id="movieUrl"
                  type="text"
                  value={movieUrl}
                  onChange={(e) => setMovieUrl(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Flex justifyContent="space-between" w="100%">
                <div>
                  {movie && (
                    <ProgressBar
                      movie={movie}
                      setMovie={setMovie}
                      setIsModalOpen={setIsModalOpen}
                    />
                  )}
                </div>
                <div>
                  <Button colorScheme="green" mr={3} onClick={handleClick}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </div>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default UploadForm;
