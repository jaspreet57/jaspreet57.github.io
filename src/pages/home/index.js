import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import MeSection from './sections/MeSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import SectionMenu from '../../components/section-menu';

const { changeFullpageSlide } = Fullpage;
const slideController = changeFullpageSlide.bind(null);


const slides = [
  <Slide className="fullpage-slide me-section">
    <MeSection />
  </Slide>,
  <Slide className="fullpage-slide about-section">
    <AboutSection />
  </Slide>,
  <Slide className="fullpage-slide work-section">
    <WorkSection />
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
  activeSlide: 0,
  slides,
};



/* Full Page Component is used from https://github.com/cmswalker/fullpage-react#readme */
class Home extends Component {
  state = {
    activeSlide: 0,
  };

  onSlideChangeStart = (name, props, state, newState) => {
    this.setState({
      activeSlide: newState.activeSlide,
    });
  }

  render() {
    const { activeSlide } = this.state;

    return (
      <React.Fragment>
        <SectionMenu activeSlide={activeSlide} changeFullPageSlide={(slideNum) => slideController(slideNum)}/>
        <Fullpage onSlideChangeStart={this.onSlideChangeStart} {...fullPageOptions} />
      </React.Fragment>
    )

  }
}

export default Home;
