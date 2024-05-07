import Contact from "./contact";
import Footer from "./footer";
import Intro from "./intro";
import Navigation from "./navigation";
import About from "./about";
import Experience from "./experince";

export default function Home() {
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
