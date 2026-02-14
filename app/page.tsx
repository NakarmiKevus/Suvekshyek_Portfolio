import Hero from "./components/Hero";
import Contact from "./components/Contact";
import AboutScroll from "./components/About";
import Skills from "./components/Skills";
import ProjectScroll from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutScroll />
      <Skills />
      <ProjectScroll />
      <Experience />
      <Contact />
    </>
  );
}
