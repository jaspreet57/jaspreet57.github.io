import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionWrapper, TitleBox, ShowcaseBox } from '../style';
import { ExternalLink } from '../../../../styled-components/custom-links';

function ContactMeSection({ active }) {
  return (
    <SectionWrapper>
      <TitleBox active={active}>
        <h1 className="title">Get in touch</h1>
        <div className="title-separator">
          <img alt="title-separator" src="./images/title-separator.svg" />
        </div>
        <div className="title-content">
          <ExternalLink href="emailto:erjaspreet57@gmail.com">
            erjaspreet57@gmail.com
          </ExternalLink>
          <br />
          <ExternalLink href="tel:9052275589">0-9052275589</ExternalLink> /{' '}
          <ExternalLink href="tel:09915605470">0-9915605470</ExternalLink>
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

ContactMeSection.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ContactMeSection;
