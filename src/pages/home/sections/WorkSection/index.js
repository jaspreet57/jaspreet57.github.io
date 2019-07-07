import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox, PageLink } from '../style';

function WorkSection({ active }) {
  return (
    <SectionWrapper>
      <TitleBox active={active}>
        <h1 className="title">My Work</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg"/>
        </div>
        <div className="title-content">
            <h2>I&apos;m working on various Javascript projects with React and Nodejs.</h2>
            <PageLink to="/my-work" >Show me more</PageLink>
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

WorkSection.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default WorkSection;
