import React, { useState } from 'react';
import Modal from 'react-responsive-modal';

const Designs = () => {

    let designDetails = [
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
        {
            name: "Helen B. Physiotherapist Portfolio",
            thumbnailImageSrc: "images/projects/helen-portfolio.png",
            mainImageSrc: "images/projects/helen-portfolio.png",
        },
    ];


    // Modal Logic

    let [modalStatus, toggleModal] = useState(false);
    const onOpenModal = () => {
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
                                <button className="designs__button" onClick={onOpenModal} key={key}>
                                    <img src={dd.thumbnailImageSrc} alt={dd.name} />
                                </button>
                                <Modal
                                    open={open}
                                    onClose={onCloseModal}
                                    center
                                    classNames={modalClassNames}
                                    closeIconSize={40}
                                >
                                    <img style={{ width: "100%" }} src={dd.mainImageSrc} alt={dd.name} />
                                </Modal>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Designs;