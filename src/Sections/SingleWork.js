import React, { useState } from "react";
import Media from "react-media";
import ProgressiveImage from "react-progressive-image";
import ImagePlaceholder from "../UI/ImagePlaceholder";
import ButtonArea from "../UI/RecentWorkUI/ButtonArea";
import TitleArea from "../UI/RecentWorkUI/TitleArea";
import ToolsArea from "../UI/RecentWorkUI/ToolsArea";
import TextArea from "../UI/RecentWorkUI/TextArea";

function SingleWork(props) {
  let [imageSrc, toggleImgSrc] = useState(props.imageSrc.thumbnail);

  const handleMouseOver = () => {
    toggleImgSrc(props.imageSrc.main);
  };

  const handleMouseOut = () => {
    toggleImgSrc(props.imageSrc.thumbnail);
  };

  const ProgressiveImgComponent = () => {
    return (
      <ProgressiveImage src={imageSrc} placeholder="">
        {(src, loading) => {
          return loading ? (
            <ImagePlaceholder
              placeholderImg={props.imageSrc.thumbnail}
              spinnerColor="#fff"
            />
          ) : (
            <img
              src={src}
              alt={props.projectName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            />
          );
        }}
      </ProgressiveImage>
    );
  };

  return (
    <div className="single-work">
      <div className="container">
        <div className="single-work__section1">
          <Media
            query="(min-width: 739px)"
            render={() => (
              <TitleArea index={props.index} projectName={props.projectName} />
            )}
          />
          <Media
            query="(max-width: 740px)"
            render={() => (
              <>
                <ProgressiveImgComponent />
                <div className="margin-container">
                  <TitleArea
                    index={props.index}
                    projectName={props.projectName}
                  />
                  <ToolsArea toolsUsed={props.toolsUsed} />
                </div>
              </>
            )}
          />
          <div className="margin-container">
            <TextArea
              description={props.description}
              learnMoreUrl={props.learnMoreUrl}
            />
            <ButtonArea liveUrl={props.liveUrl} gitHubUrl={props.gitHubUrl} />
          </div>
        </div>
        <div className="single-work__section2" style={{ height: "242.817px" }}>
          <Media
            query="(min-width: 739px)"
            render={() => (
              <>
                <ProgressiveImgComponent />
                <ToolsArea toolsUsed={props.toolsUsed} />
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleWork;
