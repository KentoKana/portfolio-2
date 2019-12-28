import React from 'react';
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
  return (
    <div className="App">
      <Navigation />
      <SocialButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/single-blog" component={() => <SingleBlog />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
