import styled, { css } from 'styled-components';

const openMenu = css`
  span {
    &:nth-child(1) {
      top: 18px;
      transform: rotate(135deg);
    }

    &:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    &:nth-child(3) {
      top: 18px;
      transform: rotate(-135deg);
    }
  }
`;

const ToggleMenuButton = styled.div`
  width: 50px;
  height: 45px;
  position: relative;
  margin: 8px 5px 5px 15px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 8px;
    width: 100%;
    background: #FFEB3B;
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    will-change: transform;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 16px;
    }

    &:nth-child(3) {
      top: 32px;
    }
  }

  ${({open}) => open ? openMenu : ''}
`;

const Another = styled.div``;

export { ToggleMenuButton, Another };
