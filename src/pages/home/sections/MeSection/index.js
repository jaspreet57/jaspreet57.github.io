import React from 'react';
import { SectionWrapper, TitleBox, ShowcaseBox } from '../style';

function MeSection() {
  return (
    <SectionWrapper>
      <TitleBox>
        <h1 className="title">Jaspreet Singh</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg"/>
        </div>
        <div className="title-content">
            <h2>Developer | Designer | Tech Enthusiast</h2>
        </div>
      </TitleBox>
      <ShowcaseBox>
        <div className="image-wrapper">
            <img alt="Showcase Here" href="" />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

export default MeSection;
