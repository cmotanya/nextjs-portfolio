import Contact from "./contact";
import Footer from "./footer";
import Intro from "./intro";
import Navigation from "./navigation";
import About from "./about";
import Project from "./project";

export default function Home() {
  return (
    <main className="mx-auto">
      <Navigation />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
