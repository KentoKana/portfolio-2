import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="about__heading">
        <span>About</span>
      </h3>
      <div className="container">
        <div className="section-1">
          <img
            src="images/toronto-sketch.jpg"
            alt="Drawing with Toronto City"
          />
        </div>
        <div className="section-2">
          <h4 className="">What I Do</h4>
          <p>
            My interest ranges from designing easy-to-use, aesthetically pleasing user interfaces to
            building web applications. I enjoy reading up on development trends and keeping an eye out
            for new ways of building applications.
          </p>
          <div className="skills">
            <h4>Tools/Concepts I'm Familiar With</h4>
            <div className="skillList">
              <i className="fab fa-js" title="JavaScript"></i>
              <i className="fab fa-html5" title="HTML 5"></i>
              <i className="fab fa-css3-alt" title="CSS 3"></i>
              <i className="fab fa-sass" title="SASS"></i>
              <i className="fab fa-bootstrap" title="Bootstrap 4"></i>
              <i className="fab fa-react" title="ReactJS"></i>
              <i className="fab fa-node" title="NodeJS"></i>
              <i className="fab fa-php" title="PHP"></i>
              <i className="fas fa-database" title="MySQL/MongoDB"></i>
              <i className="fab fa-git-alt" title="Git Version Control"></i>
              <i className="fab fa-npm" title="Node Package Manager"></i>
              <i className="fab fa-ubuntu" title="Ubuntu/BASH"></i>
              <i className="fab fa-digital-ocean" title="Digital Ocean"></i>
              <i
                className="fab fa-accessible-icon"
                title="Web Content Accessibility Guidelines 2.0 Level AA"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
