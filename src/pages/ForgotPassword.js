import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {forgotPassword} from "../firebase/config";

function ForgotPassword() {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email)
      .then(() =>
        toast({
          title: "Email sended.",
          description: "Please check your email.",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      )
      .catch((e) => console.log(e));

    setEmail("");
  };
  return (
    <>
      <Header />
      <Flex
        w={"100%"}
        margin={"0 auto"}
        justifyContent={"center"}
        marginTop={"20px"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"74.6vh"}
      >
        <Heading color={"#fff"}>Forgot Password</Heading>
        <form onSubmit={handleSubmit} style={{width: "60%"}}>
          <FormControl>
            <FormLabel htmlFor="email" color={"#fff"}>
              Email address
            </FormLabel>
            <Input
              id="email"
              type="email"
              color={"#fff"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme={"green"}
            textAlign={"end"}
            type="submit"
            width={"100%"}
            marginTop={"10px"}
          >
            Reset Password
          </Button>
        </form>
      </Flex>
      <Footer />
    </>
  );
}

export default ForgotPassword;
