import React from 'react';
import { Link } from 'react-router-dom';
import { SkillsCloud } from './style';

function AboutMe() {
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
            <h1>About Me</h1>
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
              , my name’s <span className="underline">Jaspreet Singh</span> and I’m a{' '}
              <mark>Full Stack Javascript Developer</mark>. I have experience{' '}
              making software and web apps in Javascript and Java using{' '}
              various technologies like <mark>Servlets/JSP</mark>,{' '}
              <mark>NodeJs</mark> ( Express / Loopback / Microservices ),{' '}
              <mark>ReactJs / Redux</mark>, <mark>Angular</mark>, etc.
            </p>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col-12">
            <h1 style={{ textAlign: 'center'}}>Machinery in my Head !</h1>
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
    </div>
  );
}

export default AboutMe;
