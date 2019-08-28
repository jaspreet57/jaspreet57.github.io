import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 5px 0;
  @media (min-width: 992px) {
    padding: 40px 40px 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 100;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const FlexMenu = styled.div`
    display: flex;
`;

export {
    StyledHeader,
    FlexMenu,
}