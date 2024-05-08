import React from "react";
import Contact from "./contact";
import Footer from "./footer";
import Intro from "./intro";
import Navigation from "./navigation";
import About from "./about";
import Experience from "./experience";

function Home() {
  return (
    <main className="mx-auto">
      <Navigation />
      <Intro />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
