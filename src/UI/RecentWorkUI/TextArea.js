import React from "react";
import {Link} from "react-router-dom";

const TextArea = ({description, learnMoreUrl}) => {
  return (
    <>
      <div className="text">
        <p>{description}</p>
      </div>
      <div className="learn-more-link-container">
        <Link className="learn-more-link" to={learnMoreUrl}>
          Learn More
        </Link>
      </div>
    </>
  );
};
export default TextArea;