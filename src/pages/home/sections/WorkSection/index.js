import React from 'react';
import { SectionWrapper, TitleBox, ShowcaseBox } from '../style';

function WorkSection() {
  return (
    <SectionWrapper>
      <TitleBox>
        <h1 className="title">What do I do?</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg"/>
        </div>
        <div className="title-content">
            <h2>I&apos;m Full Stack Javascript Developer</h2>
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

export default WorkSection;
