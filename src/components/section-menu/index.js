import React from 'react';
import PropTypes from 'prop-types';
import { SectionMenuWrapper, MenuItem } from './style';
import { slides } from '../../constants/slides';

function SectionMenu({ activeSlide, changeFullPageSlide }) {
  return (
    <SectionMenuWrapper>
      <MenuItem active={slides.ME.slide === activeSlide}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <button
          type="button"
          onClick={() => changeFullPageSlide(slides.ME.slide)}
        >
          Me
        </button>
      </MenuItem>
      <MenuItem active={slides.ABOUT.slide === activeSlide}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <button
          type="button"
          onClick={() => changeFullPageSlide(slides.ABOUT.slide)}
        >
          About Me
        </button>
      </MenuItem>
      <MenuItem active={slides.WORK.slide === activeSlide}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <button
          type="button"
          onClick={() => changeFullPageSlide(slides.WORK.slide)}
        >
          My Work
        </button>
      </MenuItem>
      <MenuItem active={slides.BLOGS.slide === activeSlide}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <button
          type="button"
          onClick={() => changeFullPageSlide(slides.BLOGS.slide)}
        >
          My Blogs
        </button>
      </MenuItem>
      <MenuItem active={slides.CONTACT.slide === activeSlide}>
        <img src="./images/menu-stroke.svg" alt="menu-stroke" />
        <button
          type="button"
          onClick={() => changeFullPageSlide(slides.CONTACT.slide)}
        >
          Contact
        </button>
      </MenuItem>
    </SectionMenuWrapper>
  );
}

SectionMenu.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  changeFullPageSlide: PropTypes.func.isRequired,
};

export default SectionMenu;
