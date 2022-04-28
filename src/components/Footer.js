import {Flex} from "@chakra-ui/react";
import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <Flex className="footer-text">
        <h1>Developed by @eneszenler </h1>
        <a href="https://github.com/eneszenler" target={"_blank"}>
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/eneszenler/" target={"_blank"}>
          <AiFillLinkedin />
        </a>
      </Flex>
    </footer>
  );
}

export default Footer;
