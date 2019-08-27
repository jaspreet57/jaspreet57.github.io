import React from 'react';
import { Link } from 'react-router-dom';
import { SkillsCloud } from './style';
import { PageWrapper, PageTitle } from '../styles';

function AboutMe() {
  return (
    <PageWrapper>
      <div className="container">
        <div className="container__row">
          <div className="container__col-12">
            <PageTitle>
              <h1>About Me</h1>
              <div className="divider-custom">
                <Link to="/#_about">Back</Link>
                <div className="divider-custom-line first" />
                <div className="divider-custom-icon">
                  <i className="fa fa-code" />
                </div>
                <div className="divider-custom-line last" />
                <Link to="/my-work">Next</Link>
              </div>
            </PageTitle>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <p>
              <span
                style={{
                  fontSize: '22px',
                }}
              >
                <strong>Hi</strong>
              </span>
              , my name’s <span className="underline">Jaspreet Singh</span> and
              I’m a <mark>Full Stack Javascript Developer</mark>. I have
              experience making software and web apps in Javascript and Java
              using various technologies like <mark>Servlets/JSP</mark>,{' '}
              <mark>NodeJs</mark> ( Express / Loopback / Microservices ),{' '}
              <mark>ReactJs / Redux</mark>, <mark>Angular</mark>, etc.
            </p>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <h1 style={{ textAlign: 'center' }}>Machinery in my Head !</h1>
            <SkillsCloud>
              <li>Javascript</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>NodeJs</li>
              <li>Java (Servlets/JSP)</li>
              <li>React Js (with Redux or hooks)</li>
              <li>Angular Js</li>
              <li>Typescript</li>
              <li>PostgreSQL &amp; Mongo DB</li>
              <li>AWS</li>
              <li>Serverless</li>
              <li>Step Functions, Lambda, etc</li>
              <li>Git, Git Flow, Linux</li>
            </SkillsCloud>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutMe;
