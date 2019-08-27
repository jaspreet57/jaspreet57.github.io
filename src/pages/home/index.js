import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MeSection from './sections/MeSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import BlogSection from './sections/BlogSection';
import ContactMeSection from './sections/ContactMeSection';
import SectionMenu from '../../components/section-menu';
import { slides as slidesConstants } from '../../constants/slides';
import { fullpage as fullpageConfig } from '../../config';

// const fullPageOptions = {
//   // for mouse/wheel events
//   // represents the level of force required to generate a slide change on non-mobile, 10 is default
//   scrollSensitivity: 2,

//   // for touchStart/touchEnd/mobile scrolling
//   // represents the level of force required to generate a slide change on mobile, 10 is default
//   touchSensitivity: 2,
//   scrollSpeed: 500,
//   hideScrollBars: true,
//   resetSlides: true,
//   enableArrowKeys: true,
//   activeSlide: 0,
// };

function Home() {
  return (
    <>
      <SectionMenu />
      <ReactFullpage
        licenseKey={fullpageConfig.key}
        menu="#sectionMenu"
        onLeave={() => {}}
        paddingTop="110px"
        animateAnchor={false}
        render={({ state }) => {
          const activeSection = { anchor: slidesConstants.ME.anchorName };
          if (state.destination) {
            activeSection.anchor = state.destination.anchor;
          }
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                data-anchor={slidesConstants.ME.anchorName}
              >
                <MeSection
                  active={
                    activeSection.anchor === slidesConstants.ME.anchorName
                  }
                />
              </div>
              <div
                className="section"
                data-anchor={slidesConstants.ABOUT.anchorName}
              >
                <AboutSection
                  active={
                    activeSection.anchor === slidesConstants.ABOUT.anchorName
                  }
                />
              </div>
              <div
                className="section"
                data-anchor={slidesConstants.WORK.anchorName}
              >
                <WorkSection
                  active={
                    activeSection.anchor === slidesConstants.WORK.anchorName
                  }
                />
              </div>
              <div
                className="section"
                data-anchor={slidesConstants.BLOGS.anchorName}
              >
                <BlogSection
                  active={
                    activeSection.anchor === slidesConstants.BLOGS.anchorName
                  }
                />
              </div>
              <div
                className="section"
                data-anchor={slidesConstants.CONTACT.anchorName}
              >
                <ContactMeSection
                  active={
                    activeSection.anchor === slidesConstants.CONTACT.anchorName
                  }
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default Home;
