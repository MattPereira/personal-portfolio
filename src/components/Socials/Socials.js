import "./Socials.scss";

import { Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
// import { GrMail } from "react-icons/gr";
// import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <Row>
      <div className="my-3 text-center">
        {/* <Link to="/contact" className="btn btn-outline-light mx-1 btn-lg">
          <GrMail style={{ marginBottom: "2px" }} size={25} /> Contact
        </Link> */}
        <a
          href="https://github.com/MattPereira"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light mx-1 btn-lg"
        >
          <FaGithub style={{ marginBottom: "2px" }} size={25} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/-matt-pereira-/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light mx-1 btn-lg"
        >
          Linked <BsLinkedin style={{ marginBottom: "2px" }} size={25} />
        </a>
      </div>
    </Row>
  );
};

export default Socials;
