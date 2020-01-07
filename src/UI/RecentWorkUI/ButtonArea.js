import React from "react";

const ButtonArea = ({ liveUrl, gitHubUrl }) => {
  return (
    <div className="buttons">
      <a
        className="button-primary"
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Live Site
      </a>
      <a className="button-primary" href={gitHubUrl}>
        View Code
      </a>
    </div>
  );
};

export default ButtonArea;
