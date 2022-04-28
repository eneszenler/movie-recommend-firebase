import {SearchIcon} from "@chakra-ui/icons";
import {Button, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import {Navbar, Container, Nav, Form, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useCurrentUser} from "../hooks/useCurrentUser";
import {useIsLoggedIn} from "../hooks/useIsLoggedIn";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UploadForm from "./UploadForm";

function Header() {
  const isLoggedIn = useIsLoggedIn();
  const currentUser = useCurrentUser();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            <Flex alignItems={"center"}>
              <img src="https://i.ibb.co/K2CLg18/letterbox-Logo.png" width={"15%"} />
              <Heading>Letterbase</Heading>
            </Flex>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {isLoggedIn ? (
            <>
              {currentUser && <UploadForm uid={currentUser.uid} />}

              <Link to="/profile">
                <Button marginLeft={"5px"}>Profile</Button>
              </Link>
            </>
          ) : (
            <>
              <SignIn />
              <SignUp />
            </>
          )}

          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <SearchIcon color="#fff" w={6} h={6} marginTop="1" />
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
