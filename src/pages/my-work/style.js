import styled from 'styled-components';

const Project = styled.div`
  display: block;
  border: 1px solid #00616e;
  width: 100%;
  height: 300px;
  margin: 10px;
`;

const TimeLine = styled.div`
  width: 100%;

  ul.timeline {
    list-style-type: none;
    position: relative;
    padding-top: 1px;
  }

  ul.timeline:before {
    content: ' ';
    background: #f44336;
    display: inline-block;
    position: absolute;
    left: 32px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }

  ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
  }

  ul.timeline > li:before {
    content: ' ';
    background: #fff;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #f44336;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }

  .text-uppercase {
    text-transform: uppercase !important
  }

  .small {
    font-size: 80%;
    font-weight: 400;
  }

  .flex-middle {
    display: flex;
    align-items: center;
  }

  .lead {
    margin-bottom: 40px;
  }

  h3 {
    margin: 5px;
  }

  p {
    letter-spacing: 0.05rem;
  }
`;

export { Project, TimeLine };
