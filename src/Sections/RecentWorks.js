import React from "react";
import SingleWork from "./SingleWork";
import { projectDetails } from "../Helpers/Data";

function RecentWorks() {
  return (
    <section className="recent-works" id="development">
      <div>
        <h3 className="recent-works__heading">
          <span>Recent Works</span>
        </h3>
        {projectDetails.map((pd, key) => {
          return (
            <SingleWork
              projectName={pd.name}
              description={pd.description}
              liveUrl={pd.liveUrl}
              gitHubUrl={pd.gitHubUrl}
              learnMoreUrl={pd.learnMoreUrl}
              toolsUsed={pd.toolsUsed}
              imageSrc={pd.imageSrc}
              index={key}
              key={key}
            />
          );
        })}
      </div>
    </section>
  );
}

export default RecentWorks;
