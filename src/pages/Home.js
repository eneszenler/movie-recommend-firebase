import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import UploadForm from "../components/UploadForm";
import {useIsLoggedIn} from "../hooks/useIsLoggedIn";

function Home() {
  return (
    <>
      <Header />
      <ImageGrid />
      <Footer />
    </>
  );
}

export default Home;
