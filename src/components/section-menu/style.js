import styled from 'styled-components';

const SectionMenuWrapper = styled.ul`
  position: fixed;
  width: 150px;
  transform: translate3d(0, -50%, 0);
  z-index: 100;
  @media (max-width: 992px) {
    top: 70%;
    right: 0;
    padding-right: 10px;
  }

  @media (min-width: 992px) {
    top: 50%;
    left: 0;
    padding-left: 10px;
  }
`;

const MenuItem = styled.li`
    width: 50%;
    margin-left: auto;
    margin-right: 0;
    @media (min-width: 992px) {
        margin-left: 0;
        margin-right: auto;
    }
    transition: width 0.3s;
    will-change: width;
    &:hover {
        width: 60%;
    }
    &.active {
        width: 100%;
        &:hover {
            width: 100%;
        }
    }
    img {
        width: 100%;
    }
    a {
        display:block;
        text-decoration: none;
        width: 100%;
        padding: 0;
        border: none;
        text-align: left;
        @media (min-width: 992px) {
            text-align: right;
        }
        font: inherit;
        color: white;
        background-color: transparent;
        &:focus {
            outline: none;
        }
    }
`;

export {
    SectionMenuWrapper,
    MenuItem,
}