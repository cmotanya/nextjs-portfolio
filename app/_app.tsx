import React from "react";
import Contact from "./contact";
import Footer from "./footer";
import Intro from "./intro";
import Navigation from "./navigation";
import About from "./about";
import Experience from "./experience";
import TopArrowButton from "./components/top-arrow";

function Home() {
  return (
    <main className="mx-auto">
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
