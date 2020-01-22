import React, { useState } from "react";
import Modal from "react-responsive-modal";
import ProgressiveImage from "react-progressive-image";
import ImagePlaceholder from "../UI/ImagePlaceholder";
import { designDetails } from "../Helpers/Data";
import ScrollAnimation from "react-animate-on-scroll";

const Designs = () => {
  // Modal Logic
  let [modalContent, handleModalContent] = useState({
    imgSrc: "",
    imgAlt: ""
  });
  let [modalStatus, toggleModal] = useState(false);

  const onOpenModal = e => {
    handleModalContent({
      imgSrc: e.target.getAttribute("data-main-image-src"),
      imgAlt: e.target.getAttribute("data-image-alt")
    });
    toggleModal(true);
  };

  const onCloseModal = () => {
    toggleModal(false);
  };
  const open = modalStatus;

  let modalClassNames = {
    closeIcon: "closeIcon",
    modal: "modalBody",
    overlay: "overlay"
  };

  return (
    <section className="designs" id="designs">
      <h3 className="designs__heading">
        <span>Design Works</span>
      </h3>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="container">
          {designDetails.map((dd, key) => {
            return (
              <button
                key={key}
                className="designs__button"
                onClick={e => {
                  onOpenModal(e);
                }}
              >
                <ProgressiveImage src={dd.thumbnailImageSrc} placeholder=" ">
                  {(src, loading) => {
                    return loading ? (
                      <ImagePlaceholder height={250} width={250} />
                    ) : (
                      <img
                        src={src}
                        alt={dd.name}
                        data-main-image-src={dd.mainImageSrc}
                        data-image-alt={dd.name}
                      />
                    );
                  }}
                </ProgressiveImage>
              </button>
            );
          })}

          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={modalClassNames}
            closeIconSize={40}
          >
            <ProgressiveImage src={modalContent.imgSrc} placeholder=" ">
              {(src, loading) => {
                return loading ? (
                  <ImagePlaceholder
                    height={270}
                    width={270}
                    bgColor="inherit"
                    spinnerColor="gray"
                  />
                ) : (
                  <img
                    className="modal-image"
                    src={src}
                    alt={modalContent.imgAlt}
                  />
                );
              }}
            </ProgressiveImage>
          </Modal>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Designs;
