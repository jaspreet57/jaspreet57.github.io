import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  .universe {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom,#0097aa,#016976,#004049,#002024,#000809);
    z-index: -200;
  }
`;

const AnotherStyle = styled.div`
    color: black;
`;

export {
    StyledWrapper,
    AnotherStyle,
}