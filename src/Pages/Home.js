import React from 'react';
import Banner from '../Sections/Banner';
import Designs from '../Sections/Designs';
import RecentWorks from '../Sections/RecentWorks';
import About from '../Sections/About';
import Blog from '../Sections/Blog';

function Home(props) {

    return (
      <div className="Home">
        <Banner />
        <RecentWorks />
        <Designs />
        <About />
        <Blog 
          getBlogObj = {props.getBlogObj}
        />
      </div>
    );
  }
  
  export default Home;