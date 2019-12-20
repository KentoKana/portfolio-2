import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Designs = () => {

    let [thumbnailIsLoaded, toggleThumbnailLoadStatus] = useState(false);
    let [mainImgIsLoaded, toggleMainImgLoadstatus] = useState(false);

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
                        return (
                            <React.Fragment key={key}>
                                <button
                                    className="designs__button"
                                    onClick={(e) => { onOpenModal(e) }}
                                    disabled={!thumbnailIsLoaded}
                                >
                                    <img
                                        src={dd.thumbnailImageSrc}
                                        alt={dd.name}
                                        data-main-image-src={dd.mainImageSrc}
                                        data-image-alt={dd.name}
                                        onLoad={() => { toggleThumbnailLoadStatus(true) }}
                                        style={thumbnailIsLoaded ? {} : { display: 'none' }}
                                    />
                                    <Loader
                                        type="ThreeDots"
                                        color="grey"
                                        height={30}
                                        width={30}
                                        style={!thumbnailIsLoaded ? {} : { display: 'none' }}
                                    />
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
                    <img
                        className='modal-image'
                        src={modalContent.imgSrc}
                        alt={modalContent.imgAlt}
                        onLoad={() => { toggleMainImgLoadstatus(true) }}
                        style={mainImgIsLoaded ? {} : { display: 'none' }}
                    />
                    {console.log(mainImgIsLoaded)}
                    <Loader
                        type="ThreeDots"
                        color="grey"
                        height={30}
                        width={30}
                        style={!mainImgIsLoaded ? {} : { display: 'none' }}
                    />

                </Modal>
            </div>

        </section>
    );
}

export default Designs;