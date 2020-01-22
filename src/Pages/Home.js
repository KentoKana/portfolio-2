import React from "react";
import Banner from "../Sections/Banner";
import Designs from "../Sections/Designs";
import RecentWorks from "../Sections/RecentWorks";
import About from "../Sections/About";
import Blog from "../Sections/Blog";
import HomeNav from "../Sections/HomeNav";

const Home = () => {
  return (
    <div className="Home">
      <HomeNav />
      <Banner />
      <RecentWorks />
      <Designs />
      {/* <Blog /> */}
      <About />
    </div>
  );
};

export default Home;
