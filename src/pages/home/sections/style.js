import styled from 'styled-components';


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
  .title-content {
    position: relative;
    top: -30px;
    margin-left: 100px;
    width: fit-content;
    h2 {
      font-weight: 400;
      font-size: 24px;
    }
  }
`;

const ShowcaseBox = styled.div`
  position: relative;
  padding: 80px;
  .image-wrapper {
    height: 50vh;
    border: 1px solid #333;
    width: 40vw;
  }
`;

export {
  SectionWrapper,
  TitleBox,
  ShowcaseBox,
}