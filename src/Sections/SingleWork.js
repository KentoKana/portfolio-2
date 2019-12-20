import React, {useState} from 'react';
import Media from 'react-media';


function SingleWork(props) {

    let [imageSrc, toggleImgSrc] = useState(props.imageSrc.thumbnail);

    const handleMouseOver =()=>{
        toggleImgSrc(props.imageSrc.main);
    }

    const handleMouseOut =()=> {
        toggleImgSrc(props.imageSrc.thumbnail);
    }

    return (
        <div className="single-work" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="container">
                <div className="single-work__section1">
                    <Media query="(min-width: 739px)" render={() =>
                        (
                            <>
                                <div className="title-container">
                                    <h4><span className="index">{props.index < 10 ? `0${props.index + 1}` : props.index + 1}</span><div className="project-title primary">{props.projectName}</div></h4>
                                </div>
                            </>
                        )}
                    />
                    <Media query="(max-width: 740px)" render={() =>
                        (
                            <>
                                <img src={imageSrc} alt={props.projectName} />
                                <div className="title-container">
                                    <h4><span className="index">{props.index < 10 ? `0${props.index + 1}` : props.index + 1}</span><div className="project-title primary">{props.projectName}</div></h4>
                                </div>
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
                            </>

                        )}
                    />
                    <div className="text">
                        <p>{props.description}</p>
                    </div>
                    <div className="learn-more-link-container">
                        <a className="learn-more-link" href={props.learnMoreUrl}>Learn More</a>
                    </div>
                    <div className="buttons">
                        <a className="button-primary" href={props.liveUrl} target="_blank" rel="noopener noreferrer">View Live Site</a>
                        <a className="button-primary" href={props.gitHubUrl}>View Code</a>
                    </div>
                </div>
                <div className="single-work__section2">
                    <Media query="(min-width: 739px)" render={() =>
                        (
                            <>
                                <img src={imageSrc} alt={props.projectName} />
                                <div className="tools">
                                    <h5>Tools Used</h5>
                                    <ul>
                                        {props.toolsUsed.map((t, key) => {
                                            return (
                                                <li key={key}>{t}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                        )}
                    />

                </div>
            </div>
        </div>
    );
}

export default SingleWork;