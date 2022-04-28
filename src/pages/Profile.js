import {Avatar, Button, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {logOut} from "../firebase/config";
import {useCurrentUser} from "../hooks/useCurrentUser";
import {Link} from "react-router-dom";

function Profile() {
  const currentUser = useCurrentUser();
  const handleClick = () => {
    logOut();
  };
  return (
    <>
      <Header />
      <Flex
        w={"100%"}
        justifyContent="center"
        h="76.8vh"
        alignItems={"center"}
        flexDirection="column"
      >
        {currentUser && (
          <>
            <Avatar name={currentUser.displayName} size={"2xl"} marginBottom={"10px"} />
            <Heading color={"#fff"} marginBottom={"10px"}>
              {currentUser.email}
            </Heading>
          </>
        )}

        {currentUser && (
          <Link to={`/my-movies/${currentUser.uid}`}>
            <Button colorScheme={"green"} mb={"5px"} w={"40"}>
              My Movies
            </Button>
          </Link>
        )}

        <Button colorScheme={"red"} onClick={handleClick} w={"40"}>
          Log Out
        </Button>
      </Flex>
      <Footer />
    </>
  );
}

export default Profile;
