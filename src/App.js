import React, { useState } from 'react';
import './App.scss';
import Navigation from './Sections/Navigation';
import Footer from './Sections/Footer';
import SocialButton from './UI/SocialButton';
import Home from './Pages/Home';
import SingleBlog from './Pages/SingleBlog';

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  let [blogObj, setBlogObj] = useState({});
  const handleBlogObj = (blogObj) => {
    setBlogObj(blogObj);
  }
  return (
    <div className="App">
      <Navigation />
      <SocialButton />
      <Switch>
        <Route exact path="/">
          <Home
            getBlogObj={handleBlogObj}
          />
        </Route>
        <Route path="/single-blog" component={() => <SingleBlog blogObj={blogObj} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
