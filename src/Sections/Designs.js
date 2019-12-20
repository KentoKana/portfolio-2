import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Designs = () => {

    let [thumbnailIsLoaded, toggleThumbnailLoadStatus] = useState(false);
    let [mainImgIsLoaded, toggleMainImgLoadstatus] = useState(false);


    const handleLoadStatus = (targetImgLoadStatus, handler) => {
        if (!targetImgLoadStatus) {
            setTimeout(() => { handler(true) }, 1000)
        }
    }

    const executeHandlerOnLoad = (imageSrc, handlerToExecuteOnLoad) => {
        let image = new Image();
        image.src = imageSrc;
        image.onload = handlerToExecuteOnLoad;
    }

    let designDetails = [
        {
            name: "Helen B. Physiotherapist Portfolio Web Design",
            thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Assistive Technology Web Design",
            thumbnailImageSrc: "images/projects/thumbnails/assistive-tech-company-design.png",
            mainImageSrc: "images/projects/assistive-tech-company-design.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
    ];


    // Modal Logic
    let [modalContent, handleModalContent] = useState({
        imgSrc: '',
        imgAlt: '',
    });
    let [modalStatus, toggleModal] = useState(false);

    const onOpenModal = (e) => {
        handleModalContent(
            {
                imgSrc: e.target.getAttribute('data-main-image-src'),
                imgAlt: e.target.getAttribute('data-image-alt'),
            }
        );
        toggleModal(true);
    };

    const onCloseModal = () => {
        toggleModal(false);
    };
    const open = modalStatus;

    let modalClassNames = {
        closeIcon: 'closeIcon',
        modal: 'modalBody',
        overlay: "overlay"
    }

    return (
        <section className="designs" id="designs">
            <h3 className="designs__heading"><span>Design Works</span></h3>
            <div className="container">
                {
                    designDetails.map((dd, key) => {
                        executeHandlerOnLoad(thumbnailIsLoaded, handleLoadStatus(thumbnailIsLoaded, toggleThumbnailLoadStatus));
                        return (
                            <React.Fragment key={key}>
                                <button
                                    className="designs__button"
                                    onClick={(e) => { onOpenModal(e) }}
                                    disabled={!thumbnailIsLoaded}
                                >
                                    {
                                        thumbnailIsLoaded ?
                                            <img
                                                src={dd.thumbnailImageSrc}
                                                alt={dd.name}
                                                data-main-image-src={dd.mainImageSrc}
                                                data-image-alt={dd.name}
                                            /> :
                                            <Loader
                                                type="ThreeDots"
                                                color="grey"
                                                height={30}
                                                width={30}
                                            />}
                                </button>
                            </React.Fragment>
                        );
                    })
                }
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    classNames={modalClassNames}
                    closeIconSize={40}
                >
                    {executeHandlerOnLoad(modalContent.imgSrc, handleLoadStatus(mainImgIsLoaded, toggleMainImgLoadstatus))}
                    {mainImgIsLoaded ?
                        <img
                            className='modal-image'
                            src={modalContent.imgSrc}
                            alt={modalContent.imgAlt}
                        />
                        :
                        <Loader
                            type="ThreeDots"
                            color="grey"
                            height={30}
                            width={30}
                        />
                    }
                </Modal>
            </div>

        </section>
    );
}

export default Designs;