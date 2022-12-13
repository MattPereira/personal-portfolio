import Landing from "./Landing/Landing";
import Projects from "./Projects/ProjectList";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
