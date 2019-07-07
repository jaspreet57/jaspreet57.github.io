import styled from 'styled-components';

const SectionMenuWrapper = styled.div`
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

const MenuItem = styled.div`
    width: ${({ active }) => active ? '100%' : '50%' };
    margin-left: auto;
    margin-right: 0;
    @media (min-width: 992px) {
        margin-left: 0;
        margin-right: auto;
    }
    transition: width 0.3s;
    &:hover {
        width: ${({ active }) => active ? '100%' : '60%'};
    }
    img {
        width: 100%;
    }
    button {
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
        /* show a hand cursor on hover; some argue that we
        should keep the default arrow cursor for buttons */
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
`;

export {
    SectionMenuWrapper,
    MenuItem,
}