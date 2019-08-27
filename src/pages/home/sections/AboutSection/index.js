import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox, PageLink } from '../style';

function AboutSection({ active }) {
  return (
    <SectionWrapper>
      <TitleBox active={active}>
        <h1 className="title">About Me</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg" />
        </div>
        <div className="title-content">
          <h2>I&apos;m a Full Stack Javascript Developer.</h2>
          <PageLink to="/about-me">Show me more</PageLink>
        </div>
      </TitleBox>
      <ShowcaseBox active={active}>
        <div className="image-wrapper">
          <img
            alt="Showcase Here"
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%',
              border: '1px solid #009688',
            }}
            src="./images/jsingh-at-tea.jpg"
          />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

AboutSection.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default AboutSection;
