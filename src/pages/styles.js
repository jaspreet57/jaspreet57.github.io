import styled from 'styled-components';

const PageWrapper = styled.div`
    color: white;
    padding: 10px;
    padding-top: 110px;
`;

const PageTitle = styled.div`
  text-align: center;

  .divider-custom {
    margin: 1.25rem 0 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
    }

    .divider-custom-line {
      width: 100%;
      max-width: 4rem;
      height: .25rem;
      background-color: white;
      border-radius: 1rem;
      border-color: white;

      &.first {
        margin-left: 1rem;
        margin-right: 1rem;
      }
      &.last {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }

    .divider-custom-icon {
      color: white;
      font-size: 2rem;
      font-weight: 900;
    }
  }
`;

export {
    PageWrapper,
    PageTitle,
}