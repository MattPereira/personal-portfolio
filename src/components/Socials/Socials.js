import "./Socials.scss";

import { Row } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <Row>
      <div className="my-3 text-center">
        {/* <Link to="/contact" className="icon-btn gmail">
          <FiMail size={25} />
        </Link> */}

        <a
          href="https://github.com/MattPereira"
          target="_blank"
          rel="noreferrer"
          className="icon-btn github"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://twitter.com/__MattPereira__"
          target="_blank"
          rel="noreferrer"
          className="icon-btn twitter"
        >
          <FaTwitter size={25} />
        </a>

        <a
          href="https://www.linkedin.com/in/-matt-pereira-/"
          target="_blank"
          rel="noreferrer"
          className="icon-btn linkedin"
        >
          <FaLinkedinIn size={25} />
        </a>
      </div>
    </Row>
  );
};

export default Socials;
