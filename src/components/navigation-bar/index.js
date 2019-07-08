import React from 'react';
import { StyledHeader, FlexMenu } from './style';
import { ExternalLink } from '../../styled-components/custom-links';
import SocialLinks from '../social-links';
import ToggleMenu from '../toggle-menu';

function NavigationBar() {
  return (
    <StyledHeader>
      <ExternalLink href="./">
        PORTFOLIO
      </ExternalLink>
      <FlexMenu>
        <SocialLinks />
        <ToggleMenu />
      </FlexMenu>
    </StyledHeader>
  );
}

export default NavigationBar;
