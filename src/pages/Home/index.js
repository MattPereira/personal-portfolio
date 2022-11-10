import Landing from "../../components/Landing/Landing";
import Projects from "../../components/Projects/ProjectList";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
};

export default HomePage;
