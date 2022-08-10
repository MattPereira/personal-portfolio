import "./index.scss";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

/**Homepage component
 *
 * Renders the landing, about, and project components
 *
 */
const HomePage = () => {
  return (
    <div>
      <Landing />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default HomePage;
