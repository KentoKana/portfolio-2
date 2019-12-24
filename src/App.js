import React from 'react';
import './App.scss';
import Navigation from './Sections/Navigation';
import Banner from './Sections/Banner';
import Designs from './Sections/Designs';
import RecentWorks from './Sections/RecentWorks';
import About from './Sections/About';
import Blog from './Sections/Blog';
import Footer from './Sections/Footer';
import SocialButton from './UI/SocialButton';

function App() {

  return (
    <div className="App">
      <Navigation />
      <SocialButton />
      <Banner />
      <RecentWorks />
      <Designs />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
