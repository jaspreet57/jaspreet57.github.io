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
    transform: ${({ active }) => active ? 'none': 'translateX(-150%)'};
    transition: transform 0.6s ease-out;
    transition-delay: 0.1s;
    will-change: transform;
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
    transform: ${({ active }) => active ? 'none': 'translateX(-160%)'};
    transition: transform 0.7s ease-out;
    transition-delay: 0.1s;
    will-change: transform;
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
    opacity: ${({ active }) => active ? '1': '0'};
    transform: ${({ active }) => active ? 'none': 'translateX(50%)'};
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    transition-delay: 0.1s;
    will-change: transform;
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
  /* opacity: ${({ active }) => active ? '1': '0'};
  transition: opacity 0.5s ease-out;
  transition-delay: 0.5s;
  will-change: opacity; */
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