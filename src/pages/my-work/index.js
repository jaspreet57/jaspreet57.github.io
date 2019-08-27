import React from 'react';
import { Link } from 'react-router-dom';
import { Project, TimeLine } from './style';
import { PageWrapper, PageTitle } from '../styles';
import { ExternalLink } from '../../styled-components/custom-links';

function MyWork() {
  return (
    <PageWrapper>
      <div className="container">
        <div className="container__row">
          <div className="container__col-12">
            <PageTitle>
              <h1>My Work</h1>
              <div className="divider-custom">
                <Link to="/about-me">Back</Link>
                <div className="divider-custom-line first" />
                <div className="divider-custom-icon">
                  <i className="fa fa-code" />
                </div>
                <div className="divider-custom-line last" />
                <Link to="/my-blogs">Next</Link>
              </div>
            </PageTitle>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <h2>Experience</h2>
            <hr />
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <TimeLine>
              <ul className="timeline">
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        Pesto Tech{' '}
                        <ExternalLink small href="#">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        March 2019 - June 2019
                      </span>
                    </div>
                  </div>
                  <p>— Student</p>
                  <p className="lead">
                    At Pesto, I went through 12 weeks of training in web
                    development and remote working skills. We developed a chess
                    game as a team of students. I also contributed to IPFS
                    repositories.
                  </p>
                </li>
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        CodeParva Technologies{' '}
                        <ExternalLink small href="#">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        March 2018 - March 2019
                      </span>
                    </div>
                  </div>
                  <p>— Senior Software Engineer</p>
                  <p className="lead">
                    Working at a fast-growing startup I was exposed to a lot of
                    technologies. I spent the most time here writing backend
                    APIs in Django and frontend components using ReactJS.
                  </p>
                </li>
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        Surya Software Systems{' '}
                        <ExternalLink small href="#">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        July 2016 - Feb 2018
                      </span>
                    </div>
                  </div>
                  <p>— Software Engineer</p>
                  <p className="lead">
                    Started off as a software engineer in a challenging
                    environment, I developed web applications using EmberJS and
                    worked on the server side codebase using Kotlin.
                  </p>
                </li>
              </ul>
            </TimeLine>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <h2>Projects</h2>
            <hr />
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
    </PageWrapper>
  );
}

export default MyWork;
