import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './style';

function AppWrapper({ children }) {
  return (
    <StyledWrapper>
        { children }
        <div className="universe" />
    </StyledWrapper>
  );
}

AppWrapper.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default AppWrapper;
