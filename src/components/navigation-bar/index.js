import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-me">About Me</Link>
      </li>
    </ul>
  );
}

export default NavigationBar;
