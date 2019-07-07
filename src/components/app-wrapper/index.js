import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './style';

function AppWrapper({ children }) {
  return (
    <StyledWrapper>
      {children}
      <div className="water" />
      <div id="background-wrap">
        <div className="bubble x1" />
        <div className="bubble x2" />
        <div className="bubble x3" />
        <div className="bubble x4" />
        <div className="bubble x5" />
        <div className="bubble x6" />
        <div className="bubble x7" />
        <div className="bubble x8" />
        <div className="bubble x9" />
        <div className="bubble x10" />
      </div>
    </StyledWrapper>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppWrapper;
