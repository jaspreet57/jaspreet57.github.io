import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox, PageLink } from '../style';

function AboutSection({ active }) {
  return (
    <SectionWrapper>
      <TitleBox active={active}>
        <h1 className="title">About Me</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg"/>
        </div>
        <div className="title-content">
            <h2>I&apos;m Full Stack Javascript Developer</h2>
            <PageLink to="/about-me" >Show me more</PageLink>
        </div>
      </TitleBox>
      <ShowcaseBox active={active}>
        <div className="image-wrapper">
            <img alt="Showcase Here" href="" />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}


AboutSection.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default AboutSection;
