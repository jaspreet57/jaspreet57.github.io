import React from 'react';
import Router from './Router';
import AppWrapper from './components/app-wrapper';
import './App.scss';

function App() {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
}

export default App;
