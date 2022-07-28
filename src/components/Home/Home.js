import "./Home.scss";

import Landing from "../Landing/Landing";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Stack from "../Stack/Stack";

/**Homepage component
 *
 * Renders the landing, about, and project components
 *
 */
const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Stack />
      <Projects />
    </div>
  );
};

export default Home;
