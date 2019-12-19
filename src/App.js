import React, { useState, useEffect } from 'react';
import './App.scss';
import Navigation from './Sections/Navigation';
import Banner from './Sections/Banner';
import Designs from './Sections/Designs';
import RecentWorks from './Sections/RecentWorks';
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
      <Footer />
    </div>
  );
}

export default App;
