import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.scss";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Web Developer", "Freelancer", "Software Engineer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
