import React from "react";
const TextArea = ({description, learnMoreUrl}) => {
  return (
    <>
      <div className="text">
        <p>{description}</p>
      </div>
      <div className="learn-more-link-container">
        <a className="learn-more-link" href={learnMoreUrl}>
          Learn More
        </a>
      </div>
    </>
  );
};
export default TextArea;