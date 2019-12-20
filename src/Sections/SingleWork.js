import React, { useState } from 'react';
import Media from 'react-media';
import ProgressiveImage from 'react-progressive-image';
import ImagePlaceholder from '../UI/ImagePlaceholder';

function SingleWork(props) {

    let [imageSrc, toggleImgSrc] = useState(props.imageSrc.thumbnail);

    const handleMouseOver = () => {
        toggleImgSrc(props.imageSrc.main);
    }

    const handleMouseOut = () => {
        toggleImgSrc(props.imageSrc.thumbnail);
    }

    const ProgressiveImgComponent = () => {
        return (
            <ProgressiveImage src={imageSrc} placeholder="" delay={500}>
                {(src, loading) => {
                    return loading ? <ImagePlaceholder
                        placeholderImg={props.imageSrc.thumbnail}
                        spinnerColor="#fff"
                    /> :
                        <img src={src} alt={props.projectName} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} />
                }}
            </ProgressiveImage>
        );
    }

    const TitleAreaComponent = () => {
        return (
            <div className="title-container">
                <h4><span className="index">{props.index < 10 ? `0${props.index + 1}` : props.index + 1}</span><div className="project-title primary">{props.projectName}</div></h4>
            </div>
        );
    }

    const TextAreaComponent = () => {
        return (
            <>
                <div className="text">
                    <p>{props.description}</p>
                </div>
                <div className="learn-more-link-container">
                    <a className="learn-more-link" href={props.learnMoreUrl}>Learn More</a>
                </div>
            </>
        );
    }

    const ToolsAreaComponent = () => {
        return (
            <div className="tools">
                <h5>Tools Used</h5>
                <ul>
                    {props.toolsUsed.map((t, key) => {
                        return (
                            <li key={key}>{t}</li>
                        )
                    })}
                </ul>
                <hr />
            </div>
        );
    }

    const ButtonAreaComponent = () => {
        return (
            <div className="buttons">
                <a className="button-primary" href={props.liveUrl} target="_blank" rel="noopener noreferrer">View Live Site</a>
                <a className="button-primary" href={props.gitHubUrl}>View Code</a>
            </div>
        );
    }

    return (
        <div className="single-work" >
            <div className="container">
                <div className="single-work__section1">
                    <Media query="(min-width: 739px)" render={() =>
                        (
                            <TitleAreaComponent />
                        )}
                    />
                    <Media query="(max-width: 740px)" render={() =>
                        (
                            <>
                                <ProgressiveImgComponent />
                                <TitleAreaComponent />
                                <ToolsAreaComponent />
                            </>
                        )}
                    />
                    <TextAreaComponent />
                    <ButtonAreaComponent />
                </div>
                <div className="single-work__section2">
                    <Media query="(min-width: 739px)" render={() =>
                        (
                            <>
                                <ProgressiveImgComponent />
                                <ToolsAreaComponent />
                            </>
                        )}
                    />

                </div>
            </div>
        </div>
    );
}

export default SingleWork;