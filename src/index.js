/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import GlobalStyle from './global-styes';
import App from './App';


ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
