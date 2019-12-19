import React from 'react';

const About = () => {

    return (
        <section className="about" id="about">
            <h3 className="about__heading"><span>About</span></h3>
            <div className="container">
                <div className="section-1">
                    <img src="images/toronto-sketch.jpg" alt="Drawing with Toronto City" />
                </div>
                <div className="section-2">
                    <h4 className="">A Little Bit About Me</h4>
                    <p>
                        I'm a full stack web developer in Toronto. My interest ranges from designing easy-to-use, aesthetically pleasing user interfaces to building web applications.
                    </p>
                    <div className="skills">
                        <h4 class="">Tools I'm Familiar With</h4>
                        <div className="skillList">
                            <i class="fab fa-js"></i>
                            <i class="fab fa-html5"></i>
                            <i class="fab fa-css3-alt"></i>
                            <i class="fab fa-sass"></i>
                            <i class="fab fa-react"></i>
                            <i class="fab fa-node"></i>
                            <i class="fab fa-php"></i>
                            <i class="fas fa-database"></i>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;