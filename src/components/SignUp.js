import React, {useEffect, useState} from "react";
import {signUp} from "../firebase/config";

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

function SignUp() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    signUp(name, email, password)
      .then(() => {
        console.log("asfasdsda");
        toast({
          title: "Your account successfuly created.",
          description: "Welcome to your profile.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setName("");
        setEmail("");
        setPassword("");
        onClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="login">
        <Button onClick={onOpen} fontWeight={"extrabold"} colorScheme="green">
          Signup
        </Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="user">Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="user">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="user">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={handleClick}>
                Signup
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default SignUp;
