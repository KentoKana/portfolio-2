import React from "react";
import Loader from "react-loader-spinner";

const ImagePlaceholder = props => {
  let bgColor = props.bgColor ? props.bgColor : "lightgrey";
  let spinnerColor = props.spinnerColor ? props.spinnerColor : "grey";
  let opacity = props.opacity ? props.opacity : "1";

  const RenderImagePlaceholder = () => {
    if (props.placeholderImg) {
      return (
        <div
          style={{
            position: "relative",
            opacity: opacity
          }}
        >
          <img
            className="placeholderImg"
            src={props.placeholderImg}
            alt="place holder"
            style={{ filter: "brightness(50%)", maxWidth: "400px" }}
          />
          <Loader
            type="ThreeDots"
            color={spinnerColor}
            height={30}
            width={30}
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "400px"
            }}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: bgColor,
            height: props.height,
            width: props.width,
            minWidth: "250px",
            minHeight: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: opacity,
            textAlign: "center",
            margin: "0 auto"
          }}
        >
          <Loader
            type="ThreeDots"
            color={spinnerColor}
            height={30}
            width={30}
          />
        </div>
      );
    }
  };
  return <RenderImagePlaceholder />;
};

export default ImagePlaceholder;
