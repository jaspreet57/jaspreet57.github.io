import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import MeSection from './sections/MeSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import BlogSection from './sections/BlogSection';
import ContactMeSection from './sections/ContactMeSection';
import SectionMenu from '../../components/section-menu';
import { slides as slidesConstants } from '../../constants/slides';

const { changeFullpageSlide } = Fullpage;
const slideController = changeFullpageSlide.bind(null);

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  hideScrollBars: true,
  resetSlides: true,
  enableArrowKeys: true,
  activeSlide: 0,
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
  };

  render() {
    const { activeSlide } = this.state;

    const slides = [
      <Slide className="fullpage-slide">
        <MeSection active={slidesConstants.ME.slide === activeSlide} />
      </Slide>,
      <Slide className="fullpage-slide">
        <AboutSection active={slidesConstants.ABOUT.slide === activeSlide} />
      </Slide>,
      <Slide className="fullpage-slide">
        <WorkSection active={slidesConstants.WORK.slide === activeSlide} />
      </Slide>,
      <Slide className="fullpage-slide">
        <BlogSection active={slidesConstants.BLOGS.slide === activeSlide} />
      </Slide>,
      <Slide className="fullpage-slide">
        <ContactMeSection active={slidesConstants.CONTACT.slide === activeSlide} />
      </Slide>,
    ];

    fullPageOptions.slides = slides;

    return (
      <Fullpage
        onSlideChangeStart={this.onSlideChangeStart}
        {...fullPageOptions}
      >
        <SectionMenu
          activeSlide={activeSlide}
          changeFullPageSlide={slideNum => slideController(slideNum)}
        />
      </Fullpage>
    );
  }
}

export default Home;
