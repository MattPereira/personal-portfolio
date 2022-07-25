import "./index.scss";

import About from "../About";
import Projects from "../Projects";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home Component</h1>
      <About />
      <Projects />
    </div>
  );
};

export default Home;
