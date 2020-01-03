import React from 'react';

const About = () => {

    return (
        <section className="about" id="about">
            <h3 className="about__heading"><span>About</span></h3>
            <div className="container" >
                <div className="section-1">
                    <img src="images/toronto-sketch.jpg" alt="Drawing with Toronto City" />
                </div>
                <div className="section-2">
                    <h4 className="">What I Do</h4>
                    <p>
                        I'm a full stack web developer in Toronto. My interest ranges from designing easy-to-use, aesthetically pleasing user interfaces to building web applications.
                    </p>
                    <div className="skills">
                        <h4>Tools I'm Familiar With</h4>
                        <div className="skillList">
                            <i className="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                            <i className="fab fa-sass"></i>
                            <i className="fab fa-bootstrap"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-node"></i>
                            <i className="fab fa-php"></i>
                            <i className="fas fa-database"></i>
                            <i className="fab fa-git-alt"></i>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;