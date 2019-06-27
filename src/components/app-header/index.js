import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.header`
  color: red;
  font-size: 24px;
`;

function AppHeader() {
  return (
    <div>
      <StyledH1 className="my-header">
        <br />
        <br />
        <h1>Jaspreet Singh</h1>
      </StyledH1>
    </div>
  );
}

export default AppHeader;
