import "./index.scss";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Stack from "../../components/Stack/Stack";

/**Homepage component
 *
 * Renders the landing, about, and project components
 *
 */
const HomePage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Stack />
      <Projects />
    </div>
  );
};

export default HomePage;
