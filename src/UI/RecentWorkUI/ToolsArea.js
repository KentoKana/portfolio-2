import React from 'react';

const ToolsArea = ({toolsUsed}) => {
  return (
    <div className="tools">
      <h5>Tools Used</h5>
      <ul>
        {toolsUsed.map((t, key) => {
          return <li key={key}>{t}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
};

export default ToolsArea;