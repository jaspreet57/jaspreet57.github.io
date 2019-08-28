import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox, ExternalLinkButton, ProfileDp } from '../style';


function MeSection({ active }) {
  return (
    <SectionWrapper>
      <TitleBox active={active}>
        <h1 className="title">Jaspreet Singh</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg" />
        </div>
        <div className="title-content">
          <h2>Developer | Designer | Tech Enthusiast</h2>
          <ExternalLinkButton href="https://drive.google.com/file/d/1rCMhdNsE1Rtu9-WGgSCk5EKlqwumYL7E/view" target="_blank">Open Resume</ExternalLinkButton>
        </div>
      </TitleBox>
      <ShowcaseBox active={active}>
        <div className="image-wrapper">
          <ProfileDp
            alt="Showcase Here"
            src="./images/jsingh-dive.svg"
          />
          
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

MeSection.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default MeSection;
