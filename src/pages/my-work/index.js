import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from './style';


function MyWork() {
  return (
    <div
      style={{
        color: 'white',
        paddingTop: '110px',
      }}
    >
      <div className="container">
        <div className="container__row">
          <div className="container__col-12">
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Go Back
            </Link>
            <h1>My Projects</h1>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-4">
            <Project />
          </div>
          <div className="container__col-4">
            <Project />
          </div>
          <div className="container__col-4">
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
