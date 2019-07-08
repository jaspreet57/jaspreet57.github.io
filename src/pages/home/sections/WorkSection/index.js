import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox, PageLink } from '../style';
import TopMargin from '../../../../styled-components/top-margin';

function WorkSection({ active }) {
  return (
    <SectionWrapper>
      <TopMargin />
      <TitleBox active={active}>
        <h1 className="title">My Work</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg" />
        </div>
        <div className="title-content">
          <h2>
            I&apos;m working on various Javascript projects with React and
            Nodejs.
          </h2>
          <PageLink to="/my-work">Show me more</PageLink>
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
            src="./images/snake-game.png"
          />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

WorkSection.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default WorkSection;
