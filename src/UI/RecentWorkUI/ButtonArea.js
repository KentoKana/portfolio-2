import React from "react";

const ButtonArea = ({ liveUrl, gitHubUrl }) => {
  return (
    <div className="buttons">
      <a
        className="button-primary"
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="View Live Site"
      >
        <i class="fas fa-globe"></i> View Live Site
      </a>
      <a
        className="button-primary"
        href={gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="View Code"
      >
        <i className="fas fa-code"></i> View Code
      </a>
    </div>
  );
};

export default ButtonArea;
