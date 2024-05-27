import React, { useEffect, useRef } from "react";
import Contact from "./contact";
import Footer from "./footer";
import Intro from "./intro";
import Navigation from "./navigation";
import About from "./about";
import Experience from "./experience";
import TopArrowButton from "./components/top-arrow";
import WelcomePopup from "./components/welcomePopUp";

function Home() {
  return (
    <main className="mx-auto">
      <WelcomePopup />
      <Navigation />
      <Intro />
      <About />
      <Experience />
      <Contact />
      <TopArrowButton />
      <Footer />
    </main>
  );
}

export default Home;
