import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './pages/home';
import AboutMe from './pages/about-me';
import MyWork from './pages/my-work';
import MyBlogs from './pages/my-blogs';
import NavigationBar from './components/navigation-bar';

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Route exact path="/">
      {({ match }) => {
        return (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Home />
            </div>
          </CSSTransition>
        );
      }}
    </Route>
    <Route exact path="/about-me">
      {({ match }) => {
        return (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <AboutMe />
            </div>
          </CSSTransition>
        );
      }}
    </Route>
    <Route exact path="/my-work">
      {({ match }) => {
        return (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <MyWork />
            </div>
          </CSSTransition>
        );
      }}
    </Route>
    <Route exact path="/my-blogs">
      {({ match }) => {
        return (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <MyBlogs />
            </div>
          </CSSTransition>
        );
      }}
    </Route>
  </BrowserRouter>
);

export default Router;
