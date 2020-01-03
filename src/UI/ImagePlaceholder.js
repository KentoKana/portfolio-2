import React from 'react';
import Loader from 'react-loader-spinner'

const ImagePlaceholder = (props) => {
    let bgColor = props.bgColor ? props.bgColor : 'lightgrey';
    let spinnerColor = props.spinnerColor ? props.spinnerColor : 'grey';
    let opacity = props.opacity ? props.opacity : '1'

    const RenderImagePlaceholder = () => {
        if (props.placeholderImg) {
            return (
                <div style={{
                    position: 'relative',
                    opacity: opacity,
                }}>
                    <img
                        className="placeholderImg"
                        src={props.placeholderImg}
                        alt="place holder"
                    />
                    <div style={{
                        backgroundColor: 'lightgray',
                        width: '100%',
                        height: '99%',
                        position: 'absolute',
                        top: '0',
                        opacity: '0.5'
                    }} />
                    <Loader
                        type="ThreeDots"
                        color={spinnerColor}
                        height={30}
                        width={30}
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            alignItems: 'center',
                            textAlign: 'center',
                            margin: '0 auto',
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: opacity,
                        textAlign: 'center',
                        margin: '0 auto'
                    }}
                >
                    <Loader
                        type="ThreeDots"
                        color={spinnerColor}
                        height={30}
                        width={30}
                    />
                </div>
            )
        }

    }
    return (
        <RenderImagePlaceholder />
    );
}

export default ImagePlaceholder;