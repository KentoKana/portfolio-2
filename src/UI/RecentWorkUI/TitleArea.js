import React from 'react';


const TitleArea = ({index, projectName}) => {
    return (
        <div className="title-container">
            <h4><span className="index">{index < 10 ? `0${index + 1}` : index + 1}</span><div className="project-title primary">{projectName}</div></h4>
        </div>
    );
}

export default TitleArea;