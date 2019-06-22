import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../navigation-bar';

const StyledH1 = styled.header`
  color: red;
  font-size: 24px;
`;

function AppHeader() {
  return (
    <div>
      <StyledH1 className="my-header">
        <h1>My Portfolio </h1>
      </StyledH1>
      <NavigationBar />
    </div>
  );
}

export default AppHeader;
