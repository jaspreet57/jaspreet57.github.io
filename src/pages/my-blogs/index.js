import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper, PageTitle } from '../styles';


function MyBlogs() {
  return (
    <PageWrapper>
      <div className="container">
        <div className="container__row">
          <div className="container__col-12">
            <PageTitle>
              <h1>My Blogs</h1>
              <div className="divider-custom">
                <Link to="/my-work">Back</Link>
                <div className="divider-custom-line first" />
                <div className="divider-custom-icon">
                  <i className="fa fa-code" />
                </div>
                <div className="divider-custom-line last" />
                <Link to="/#_contact">Next</Link>
              </div>
            </PageTitle>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default MyBlogs;
