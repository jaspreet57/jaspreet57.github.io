import styled from 'styled-components';

const SectionMenuWrapper = styled.div`
  position: fixed;
  top: 50%;
  width: 150px;
  transform: translate3d(0, -50%, 0);
  left: 0;
  padding-left: 10px;
  z-index: 100;
`;

const MenuItem = styled.div`
    width: ${({ active }) => active ? '100%' : '50%' };
    text-align: right;
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
        text-align: right;
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