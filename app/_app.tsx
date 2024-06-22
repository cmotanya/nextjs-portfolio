import React from "react";
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
    <div>
      <WelcomePopup />
      <div className="">
        <Navigation />
        <main className="md:ml-[30%] md:w-[70%] w-full">
          <Intro />
          <About />
          <Experience />
          <Contact />
          <TopArrowButton />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;
