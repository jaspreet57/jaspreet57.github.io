import styled from 'styled-components';

const StyledSocialList = styled.ul`
  text-align: right;
  margin: 0;
  font-size: 1em;
  li {
    display: inline-block;
    padding-left: 0.75em;
  }
`;

const SocialLink = styled.a`
    line-height: 2.8em;
    text-align: center;
    box-shadow: none;
    min-width: 0;
    max-width: 400px;
    width: 60px;
    height: 60px;
    display: inline-block;
    font-weight: 400;
    padding: 0;
    margin: 0 auto;
    background: none;
    color: #fff;
    position: relative;
    z-index: 1;
    border-radius: 40px;
    backface-visibility: hidden;
    -webkit-font-smoothing: grayscale;
    transition: background-color 0.25s ease-in-out;
    transition: color 0.3s;

    &:hover {
        background: rgba(0, 0, 0, 0.025);
        color: #333;
        &::before {
            box-shadow: inset 0 0 0 2px white;
            transform: scale3d(1, 1, 1);
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        z-index: -1;
        box-shadow: inset 0 0 0 35px #006e7c;
        transform: scale3d(0.9, 0.9, 1);
        transition: box-shadow 0.3s, transform 0.3s;
    }

    i {
        font-size: 30px;
        line-height: 60px;
    }
`;

export {
    StyledSocialList,
    SocialLink,
}
  