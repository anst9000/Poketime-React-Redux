import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        officia neque molestias maiores excepturi totam aliquam dolorem
        voluptate? Quis, debitis.
      </p>
    </div>
  );
};

export default Rainbow(About);
