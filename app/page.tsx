import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Navigation from "./navigation";
import Skills from "./skills";

export default function Home() {
  return (
    <main className="mx-auto">
      <Navigation />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
