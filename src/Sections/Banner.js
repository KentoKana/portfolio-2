import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Banner() {
  return (
    <main className="banner" id="top">
      <div className="container">
        <div className="banner__text">
          <h1>
            I'm <span className="primary">Kento</span>.
          </h1>
          <h2>A Toronto Based Full Stack Developer & Web Designer.</h2>
          <div className="banner__links">
            <div>
              <a href="http://google.com">
                <i className="fas fa-file"></i> View Resume
              </a>
            </div>
            <div>
              <AnchorLink className="" href="#development" offset={100}>
                <i className="fas fa-pencil-ruler"></i> View Portfolio
              </AnchorLink>
            </div>
          </div>
        </div>
        <div className="banner__image">
          <img
            src="images/toronto-sketch.jpg"
            alt="Drawing with Toronto City"
          />
        </div>
      </div>
    </main>
  );
}

export default Banner;
