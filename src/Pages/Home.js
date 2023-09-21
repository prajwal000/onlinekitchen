import React from "react";
import Herobanner from "../Components/Herobanner";
import Herobanner2 from "../Components/Herobanner2";
import Herobanner3 from "../Components/Herobanner3";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Herobanner />
      <Herobanner2 />
      <Herobanner3 />
      <Footer />
    </>
  );
}

export default Home;
