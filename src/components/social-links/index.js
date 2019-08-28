import React from 'react';
import { StyledSocialList, SocialLink } from './style';

function SocialLinks() {
  return (
    <>
      <StyledSocialList>
        <li>
          <SocialLink target="_blank" href="https://github.com/jaspreet57">
            <i className="fa fa-github" title="Github link" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            target="_blank"
            href="https://www.linkedin.com/in/erjaspreet57"
          >
            <i className="fa fa-linkedin" title="Linkedin link" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            target="_blank"
            href="https://www.facebook.com/jaspreet.s.saran"
          >
            <i className="fa fa-facebook" title="Facebook link" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            target="_blank"
            href="https://www.instagram.com/jaspreet.s.saran"
          >
            <i className="fa fa-instagram" title="Instagram link" />
          </SocialLink>
        </li>
        <li>
          <SocialLink target="_blank" href="https://twitter.com/erjaspreet57">
            <i className="fa fa-twitter" title="Twitter link" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UCo-24ZAY9GvLVfVeKaPA5ag"
          >
            <i className="fa fa-youtube-play" title="Youtube link" />
          </SocialLink>
        </li>
      </StyledSocialList>
    </>
  );
}

export default SocialLinks;
