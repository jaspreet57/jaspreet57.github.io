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
                        <ExternalLink small href="https://pesto.tech/">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        June 2019 - August 2019
                      </span>
                    </div>
                  </div>
                  <p>— Student</p>
                  <p className="lead">
                    <ExternalLink small href="https://pesto.tech/">Pesto</ExternalLink> is a 12-week intensive training program to help software engineers in India break into international tech careers via full-time remote jobs.
                    <br />
                    <ul>
                      <li>
                        Spent 8 weeks reviewing web development best practices and learning soft skills for remote work.
                      </li>
                      <li>
                        Spent 4 weeks contributing to Open Source Project - <ExternalLink small href="https://github.com/webhintio">Webhint</ExternalLink>. It is an hinting engine for the web. <ExternalLink small href="https://docs.google.com/document/d/1zVz-q8XFXq6QhYPKB2nMBCLNwGAyFlXkybAwV6ik4p8/edit">Here</ExternalLink> are the details of all PR merged.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        Sourcefuse Technologies{' '}
                        <ExternalLink small href="https://www.sourcefuse.com/">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        Nov 2017 - May 2019
                      </span>
                    </div>
                  </div>
                  <p>— Full Stack Web Developer</p>
                  <p className="lead">
                    <ExternalLink small href="https://www.sourcefuse.com/">Sourcefuse</ExternalLink> is the leading AWS Transformation Partner that helps clients in digitizing their business.<br />
                    <strong>Projects</strong><br />
                    <br />
                    <ExternalLink small href="https://www.sourcefuse.com/portfolio/relayride-onecall/">RelayRIDE</ExternalLink> - a healthcare application built to seamlessly manage sedan transportation for workers’ compensation claims.<br />
                    <ul>
                      <li>
                        Worked on various parts of the application using NodeJs, Serverless stack, AWS, AngularJs, Pubnub, Google Map APIs, Lyft APIs, Twilio, etc.
                      </li>
                      <li>
                        Solved the problem of keeping updated records of local vendors and finding vendors in radius from a given location. Tools used were AWS Serverless, Postgis, Google Map APIs.
                      </li>
                      <li>
                        Helps in redesigning Angularjs Components, updated angular router and created custom drag and drop select component.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        InstaRem PTE Ltd{' '}
                        <ExternalLink small href="https://www.instarem.com/en-in/">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        July 2017 - Nov 2017
                      </span>
                    </div>
                  </div>
                  <p>— Full Stack Web Developer</p>
                  <p className="lead">
                    <ExternalLink small href="https://www.instarem.com/en-in/">InstaRem</ExternalLink> is a fintech product company involved in Foreign Exchange. It is using technology to innovate the way people use to send money overseas.
                    <ul>
                      <li>
                        Worked on InstaRem Web App in its initial phase - Scaffolding the react app, setting up API gateway between micro services and frontend, getting latest exchange rates from <ExternalLink small href="https://www.instarem.com/en-in/">reuters</ExternalLink>, etc.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <div className="container__row">
                    <div className="container__col-lg-8 container__col-12">
                      <h3>
                        Tata Consultancy Services{' '}
                        <ExternalLink small href="https://www.tcs.com">
                          <i className="fa fa-link" />
                        </ExternalLink>
                      </h3>
                    </div>
                    <div className="container__col-lg-4 container__col-12 flex-middle">
                      <span className="text-uppercase small">
                        Oct 2015 - July 2017
                      </span>
                    </div>
                  </div>
                  <p>— System Engineer</p>
                  <p className="lead">
                    <ExternalLink small href="https://www.tcs.com">Tata Consultancy Services Limited</ExternalLink> is an Indian multinational information technology service and consulting company headquartered in Mumbai, Maharashtra, India. <br />
                    <br />
                    <strong>Roles and Projects</strong><br />
                    <br />
                    <strong>As a Learning Enabler at training center of TCS Hyderabad:</strong><br />
                    <ul>
                      <li>
                      After completion of initial training, I got selected as Learning Enabler in the same training center. My role was to give Java Sessions to the next coming batch and complete some internal projects on going in Innovation Lab.
                      </li>
                    </ul>
                    <br />
                    <strong>As an Automation QA for client - Nationwide ( US Financial Authority)</strong><br />
                    <ul>
                      <li>
                        Apart from regular testing job, I created C# tools for client that help in the automation of functional testing which was going on manually at project’s onshore.
                      </li>
                      <li>
                        Got appreciation badge for the above task and saved more that $ 6000 of client by automating most of things.
                      </li>
                    </ul>
                    <br />
                    <strong>As a Full Stack Java Web Developer for TCS project -  <ExternalLink small href="https://www.tcscodevita.com">CodeVita</ExternalLink></strong><br />
                    <ul>
                      <li>
                        Worked on Web Services using Java Servlets and JSP, HTML5, CSS, javascript, jquery, chart.js and bootstrap.
                      </li>
                      <li>
                        Other tools in the stack were AWS EC2, HA Proxy, Centos, Mooshak (Legacy Test Runner).
                      </li>
                    </ul>
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
