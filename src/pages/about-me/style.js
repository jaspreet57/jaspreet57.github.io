import styled from 'styled-components';

const SkillsCloud = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    text-decoration: none;
    display: block;
    padding: 20px;
    margin: 1px;
    font-size: 20px;
    border: 1px solid #00616e;
    &:hover {
      opacity: 0.3;
      cursor: pointer;
      transition: opacity 0.3s;
    }
  }
`;

const DefineIt = {};

export { SkillsCloud, DefineIt };
