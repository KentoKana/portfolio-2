import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banner = () => {
  return (
    <main className="banner fadeIn animated" id="top">
      <div className="container">
        <div className="banner__text">
          <h1>
            I'm <span className="primary">Kento</span>.
          </h1>
          <h2>I'm a full stack developer and a web designer based in Toronto, with a focus on building applications that are both accessible and easy-to-use.</h2>
          <div className="banner__links">
            <div>
              <a href="/Resume.pdf" target="_blank" rel="nofollow noreferrer" className="button-primary">
                <i className="fas fa-file"></i> Download Resume
              </a>
            </div>
            <div>
              <AnchorLink
                href="#development"
                offset={100}
                className="button-primary"
              >
                <i className="fas fa-pencil-ruler"></i> View Portfolio
              </AnchorLink>
            </div>
          </div>
        </div>
        {/* <div className="banner__image">
          <img
            src="images/toronto-sketch.jpg"
            alt="Drawing with Toronto City"
          />
        </div> */}
      </div>
    </main>
  );
};

export default Banner;
