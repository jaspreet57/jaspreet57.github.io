import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './style';

function AppWrapper({ children }) {
  return (
    <StyledWrapper>
        { children }
    </StyledWrapper>
  );
}

AppWrapper.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default AppWrapper;
