import React from 'react';
// import Navbar from './Navbar';

class Home extends React.Component {
  state = {
    tabOpen: true
  };

  employerHomePage = () => {
    this.setState({tabOpen: true});
  }
  talentHomePage = () => {
    this.setState({tabOpen: false});
  }
  render(){
    console.log('this is inside the functional component',this.state);
    return(
      <div>
        {(this.state.tabOpen === true) &&
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
                <h2>Find your next contract in the tech industry</h2>
                <a className="button amEmployer" href="/register#talent">
                  <span>
                    APPLY FOR JOBS
                  </span>
                </a>
                <a onClick={this.talentHomePage} id="talent" className="button applyForJobs">
                  <span>
                    I'm an employer
                  </span>
                </a>
              </div>
            </div>
            <div className="howItWorks">
              <div className="aboutHomePageContent">
                <h1 className="headerHomePage">It's simple and it works</h1>
                <div className="columns is-mobile  is-multiline">
                  <div className="column is-half-desktop spacingAbout">
                    <div className="iconProcess">
                      <img src="./assets/s-03.svg"/>
                    </div>
                    <div>
                      <h3 className="aboutheader">How can I join?</h3>
                    Simply sign up. Once your profile is approved we'll make it visible to companies and you'll start getting offers.</div>
                  </div>
                  <div className="column is-half-desktop spacingAbout">
                    <div className="iconProcess">
                      <img src="./assets/s-04.svg"/>
                    </div>
                    <div>
                      <h3 className="aboutheader">Are you a recruitment agency?</h3>
                      No. On talent.io, companies reach out directly to you. You're in complete control. Our team of Talent Advocates is always available to help and advise, though.
                    </div>
                  </div>
                </div>
                <div className="columns is-mobile  is-multiline">
                  <div className="column is-half-desktop spacingAbout">
                    <div className="iconProcess">
                      <img src="./assets/s-05.svg"/>
                    </div>
                    <div>
                      <h3 className="aboutheader">I don't have a lot of time</h3>
                      talent.io was built for you. You control when to make your profile visible. When you get offers you can choose to accept or reject them in a single click. Finding a new job has never been that easy.
                    </div>
                  </div>
                  <div className="column is-half-desktop spacingAbout">
                    <div className="iconProcess">
                      <img src="./assets/s-06.svg"/>
                    </div>
                    <div>
                      <h3 className="aboutheader">Who can see my profile?</h3>
                      Your profile is hidden from your current and past employers, and we can hide it from additional companies of your choice. You won't appear anywhere online and your profile will only be seen by selected companies for a duration of four weeks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {(this.state.tabOpen === false) &&
          <div>
            <div className="employerBackground">
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
                <h2>Find your next contract in the tech industry</h2>
                <a className="button amEmployer" href="/register#talent">
                  <span>
                    APPLY FOR JOBS
                  </span>
                </a>
                <a onClick={this.employerHomePage} id="talent" className="button applyForJobs">
                  <span>
                    I'm talent
                  </span>
                </a>
              </div>
            </div>
            <div className="howItWorks">
              <div className="aboutHomePageContent">
                <h1 className="headerHomePage">It's simple and it works</h1>
                <div className="columns is-mobile  is-multiline">
                  <div className="column is-one-third-desktop spacingAbout">
                    <div className="iconProcess">
                      <img src="./assets/s-09.svg"/>
                    </div>
                    <div>
                      <h3 className="aboutheader">All functions</h3>
                        We place developers across all positions and functions. From full stack developers, to more specialised positions such as tech leads, product managers, and CTOs.                  </div>
                    <div className="column is-one-third-desktop spacingAbout">
                      <div className="iconProcess">
                        <img src="./assets/s-10.svg"/>
                      </div>
                      <div>
                        <h3 className="aboutheader">All tech stacks</h3>
                        No. On talent.io, companies reach out directly to you. You're in complete control. Our team of Talent Advocates is always available to help and advise, though.
                      </div>
                    </div>
                  </div>
                  <div className="columns is-mobile  is-multiline">
                    <div className="column is-one-third-desktop spacingAbout">
                      <div className="iconProcess">
                        <img src="./assets/s-11.svg"/>
                      </div>
                      <div>
                        <h3 className="aboutheader">All seniority levels</h3>
                          Our platform features developers with varying levels of seniority. From juniors right after school, to seniors with 5+ years of experience.                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }
      </div>
    );
  }
}

export default Home;
