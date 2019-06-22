import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: red;
  font-size: 24px;
`;

function App() {
  return (
    <StyledH1 className="my-header" onClick={() => console.log('clicked')}>
      <strong>My Portfolio </strong>
    </StyledH1>
  );
}

export default App;
