import React from 'react';
// import Navbar from './Navbar';

const Home = () => {

  return(
    <div>
      <div className="employeeBackground">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="./assets/Shift-logo_logo.svg" width="112" height="28"/>
            </a>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button signUpButton" href="/register">
                      <span>
                        Sign Up
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button signUpButton" href="/login">
                      <span>Sign In</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="aboutPageContent">
          <h1 className="headerRegisterPage">You deserve a better job</h1>
          <h2>Find your next tech job in one week. Salaries from £35k to £100k.</h2>
          <a className="button amEmployer" href="/register#talent">
            <span>
              APPLY FOR JOBS
            </span>
          </a>
          <a className="button applyForJobs" href="/register">
            <span>
              I'm an employer
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
