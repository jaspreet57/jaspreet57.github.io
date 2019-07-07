import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox } from '../style';
import TopMargin from '../../../../styled-components/top-margin';

function MeSection({ active }) {
  return (
    <SectionWrapper>
      <TopMargin />
      <TitleBox active={active}>
        <h1 className="title">Jaspreet Singh</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg"/>
        </div>
        <div className="title-content">
            <h2>Developer | Designer | Tech Enthusiast</h2>
        </div>
      </TitleBox>
      <ShowcaseBox active={active}>
        <div className="image-wrapper">
            <img alt="Showcase Here" style={{
              position: 'relative',
              display: 'block',
              margin: 'auto',
              height: '60vh'
            }} src="./images/jsingh-dive.svg" />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

MeSection.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default MeSection;
