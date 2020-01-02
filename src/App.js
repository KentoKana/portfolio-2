import React, { useState } from 'react';
import './App.scss';
import Navigation from './Sections/Navigation';
import Footer from './Sections/Footer';
import SocialButton from './UI/SocialButton';
import Home from './Pages/Home';
import AllBlog from './Pages/AllBlog';
import SingleBlog from './Pages/SingleBlog';
import ScrollToTop from './Helpers/scrollToTop';
import NotFound from './Pages/404';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

const App = ({ history }) => {

  let [isRoot, setIsRoot] = useState(true);
  history.listen(location => {
    setIsRoot(location.pathname === "/");
  });

  return (
    <div className="App">
      <Navigation
        isRoot={isRoot}
      />
      <SocialButton />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/blog-posts" component={() => <AllBlog />} />
        <Route path="/single-blog" component={() => <SingleBlog />} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
