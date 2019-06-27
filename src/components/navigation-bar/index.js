import React from 'react';
import { StyledHeader, FlexMenu } from './style';
import { ExternalLink } from '../../styled-components/custom-links';
import SocialLinks from '../social-links';

function NavigationBar() {
  return (
    <StyledHeader>
      <ExternalLink href="./">
        Jaspreet Singh
      </ExternalLink>
      <FlexMenu>
        <SocialLinks />
      </FlexMenu>
    </StyledHeader>
  );
}

export default NavigationBar;
