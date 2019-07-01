import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SectionWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    color: white;
`;

const TitleBox = styled.div`
  position: relative;
  padding-left: 12%;
  width: fit-content;
  .title {
    position: relative;
    width: fit-content;
    left: ${({ active }) => active ? '0': '-150%'};
    transition: left 0.6s ease-out;
    /* transition: left 0.6s cubic-bezier(1.000, -0.530, 0.405, 1.425); */
    transition-delay: 0.1s;
  }
  .title-separator {
    position: relative;
    width: fit-content;
    left: ${({ active }) => active ? '0': '-160%'};
    transition: left 0.7s ease-out;
    transition-delay: 0.1s;
  }
  .title-content {
    position: relative;
    top: -30px;
    margin-left: 100px;
    width: fit-content;
    left: ${({ active }) => active ? '0': '50%'};
    opacity: ${({ active }) => active ? '1': '0'};
    transition: left 0.8s ease-out, opacity 0.8s ease-out;
    transition-delay: 0.1s;
    h2 {
      font-weight: 400;
      font-size: 24px;
    }
  }
`;

const ShowcaseBox = styled.div`
  position: relative;
  padding-right: 90px;
  right: ${({ active }) => active ? '0': '-30%'};
  opacity: ${({ active }) => active ? '1': '0'};
  transition: right 0.8s ease-out, opacity 0.8s ease-out;
  .image-wrapper {
    height: 50vh;
    width: 40vw;
  }
`;

const PageLink = styled(Link)`
    color: white;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 10px;
    padding: 5px 10px;
    :hover {
      opacity: 0.6;
      transition: opacity .3s;
    }
`;

export {
  SectionWrapper,
  TitleBox,
  ShowcaseBox,
  PageLink
}