import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    align-items: center;
    color: white;
`;

const TitleBox = styled.div`
  position: relative;
  padding-left: 0;
  flex-basis: 100%;
  width: fit-content;
  max-width: 500px;
  margin: auto;
  @media (min-width: 992px) {
    flex-basis: 50%;
    padding-left: 12%;
    max-width: 100%;
    margin: none;
  }
  
  .title {
    position: relative;
    width: fit-content;
    font-size: 3rem;
    padding: 10px;
    @media (min-width: 992px) {
      font-size: 5rem;
    }
    margin: 5px;
    left: ${({ active }) => active ? '0': '-150%'};
    transition: left 0.6s ease-out;
    /* transition: left 0.6s cubic-bezier(1.000, -0.530, 0.405, 1.425); */
    transition-delay: 0.1s;
  }
  .title-separator {
    position: relative;
    width: 250px;
    @media (min-width: 992px) {
      width: fit-content;
    }
    img {
      width: 100%;
    }
    left: ${({ active }) => active ? '0': '-160%'};
    transition: left 0.7s ease-out;
    transition-delay: 0.1s;
  }

  .title-content {
    position: relative;
    top: -30px;
    margin-left: 60px;
    @media (min-width: 992px) {
      margin-left: 100px;
    }
    padding: 10px;
    width: fit-content;
    left: ${({ active }) => active ? '0': '50%'};
    opacity: ${({ active }) => active ? '1': '0'};
    transition: left 0.8s ease-out, opacity 0.8s ease-out;
    transition-delay: 0.1s;
    h2 {
      font-weight: 400;
      font-size: 20px;
      @media (min-width: 992px) {
        font-size: 24px;
      }
    }
  }
`;

const ShowcaseBox = styled.div`
  position: relative;
  flex-basis: 100%;
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
  right: ${({ active }) => active ? '0': '-30%'};
  opacity: ${({ active }) => active ? '1': '0'};
  transition: right 0.8s ease-out, opacity 0.8s ease-out;
  .image-wrapper {
    width: 100vw;
    @media (min-width: 992px) {
      width: 40vw;
    }
    margin: auto;
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