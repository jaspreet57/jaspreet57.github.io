import styled from 'styled-components';

const ExternalLink = styled.a`
  font-size: 2.4rem;
  font-weight: 400;
  color: #FFEB3B;
  opacity: 1;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const StrikeThroughLink = styled.div`
  color: black;
`;

export { ExternalLink, StrikeThroughLink };
