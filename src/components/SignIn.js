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
import {signIn} from "../firebase/config";
import {Link} from "react-router-dom";

function SignIn() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    signIn(email, password)
      .then(() => {
        toast({
          title: "Logged In.",
          description: "Welcome to your profile.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setEmail("");
        setPassword("");
        onClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="login">
        <Button onClick={onOpen} fontWeight={"extrabold"} color="#38a169">
          Sign In
        </Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
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
              <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
                <Link to="/forgot-password">
                  <p>Forgot Password?</p>
                </Link>
                <div>
                  <Button colorScheme="green" mr={3} onClick={handleClick}>
                    Login
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

export default SignIn;
