import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/about-me';
import NavigationBar from './components/navigation-bar';

const Router = () => (
    <BrowserRouter>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />
    </BrowserRouter>
)

export default Router;