import React from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import AppHeader from '../../components/app-header';

/* Full Page Component is used from https://github.com/cmswalker/fullpage-react#readme */
function Home() {
  const slides = [
    <Slide className="fullpage-slide">
      <AppHeader />
    </Slide>,
    <Slide className="fullpage-slide">
      About Section
    </Slide>,
    <Slide className="fullpage-slide">
      Work Section
    </Slide>,
  ];

  const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 2,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 2,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true,
    slides,
  };

  return <Fullpage {...fullPageOptions} />;
}

export default Home;
