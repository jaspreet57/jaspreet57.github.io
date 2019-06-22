import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/about-me';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />
    </BrowserRouter>
  );
}

export default App;
