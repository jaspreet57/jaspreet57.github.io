import React from 'react';
import { SectionMenuWrapper, MenuItem } from './style';
import { slides } from '../../constants/slides';

function SectionMenu() {
  return (
    <SectionMenuWrapper id="sectionMenu">
      <MenuItem data-menuanchor={slides.ME.anchorName}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <a
          href={`#${slides.ME.anchorName}`}
        >
          Me
        </a>
      </MenuItem>
      <MenuItem data-menuanchor={slides.ABOUT.anchorName}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <a
          href={`#${slides.ABOUT.anchorName}`}
        >
          About Me
        </a>
      </MenuItem>
      <MenuItem data-menuanchor={slides.WORK.anchorName}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <a
          href={`#${slides.WORK.anchorName}`}
        >
          My Work
        </a>
      </MenuItem>
      <MenuItem data-menuanchor={slides.BLOGS.anchorName}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <a
          href={`#${slides.BLOGS.anchorName}`}
        >
          My Blogs
        </a>
      </MenuItem>
      <MenuItem data-menuanchor={slides.CONTACT.anchorName}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <a
          href={`#${slides.CONTACT.anchorName}`}
        >
          Contact
        </a>
      </MenuItem>
    </SectionMenuWrapper>
  );
}

export default SectionMenu;
