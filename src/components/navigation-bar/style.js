import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 40px 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const FlexMenu = styled.div`
    display: flex;
`;

export {
    StyledHeader,
    FlexMenu,
}