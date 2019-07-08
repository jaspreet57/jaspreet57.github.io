import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox } from '../style';
import { ExternalLink } from '../../../../styled-components/custom-links';
import TopMargin from '../../../../styled-components/top-margin';

function ContactMeSection({ active }) {
  return (
    <SectionWrapper>
      <TopMargin />
      <TitleBox active={active}>
        <h1 className="title">Get in touch</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg" />
        </div>
        <div className="title-content">
          <ExternalLink small href="emailto:erjaspreet57@gmail.com">
            erjaspreet57@gmail.com
          </ExternalLink>
          <br />
          <ExternalLink small href="tel:9052275589">0-9052275589</ExternalLink> /{' '}
          <ExternalLink small href="tel:09915605470">0-9915605470</ExternalLink>
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
            src="./images/jsingh-contact.jpg"
          />
        </div>
      </ShowcaseBox>
    </SectionWrapper>
  );
}

ContactMeSection.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ContactMeSection;
