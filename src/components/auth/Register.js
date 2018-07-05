import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import { Link } from 'react-router-dom';

class AuthRegister extends React.Component {
  state = {
    role: 'Employer',
    tabOpen: true
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/jobs'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid Credentials');
        // Replace is used here so not multiple elements of the invalid registration are added to the history array. Or else if the user fails to register many times, you have to press the back button a lot to go back to where you were previously.
        this.props.history.replace('/register');
      });
  }

  employerTab = (e) => {
    console.log(e.target.classList.value);
    if(this.state.tabOpen === true){
      e.target.classList.add('is-active');
    } else if(this.state.tabOpen === false) {
      this.setState({tabOpen: true});
      this.setState({role: 'Employer'});
      // .remove('is-active');
    }

  }
  talentTab = (e) => {
    console.log(e.target.classList.value);
    if(this.state.tabOpen === false){
      e.target.classList.add('is-active');
    } else if(this.state.tabOpen === true) {
      this.setState({tabOpen: false});
      this.setState({role: 'Freelancer'});
      e.target.classList.remove('is-active');
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="backgroundImageLoginRegister">
        </div>
        <div className="mainBody">
          <div className="columns is-multiline ">
            <div className="column is-three-fifths-desktop ">
              <div className="">
                <div className="tabs is-boxed">
                  <ul>
                    <li >
                      {this.state.tabOpen &&
                      <a onClick={this.talentTab} id="talent" className="talent">
                        Talent
                      </a>
                      }
                      {!this.state.tabOpen &&
                      <a onClick={this.talentTab} id="talent" className="talent is-active">
                        Talent
                      </a>
                      }
                    </li>
                    <li >
                      {this.state.tabOpen &&
                        <a onClick={this.employerTab} id="employer" className="employer is-active">
                          Employer
                        </a>
                      }
                      {!this.state.tabOpen &&
                        <a onClick={this.employerTab} id="employer" className="employer">
                          Employer
                        </a>
                      }
                    </li>
                  </ul>
                </div>
              </div>
              {!this.state.tabOpen &&
              <div className="companyLogo3">
                <div className="title1">Sign Up for Talent</div>
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Full Name</label>
                    <input
                      className="input"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <input
                      className="input"
                      name="email"
                      placeholder="e.g. john@example.com"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <label className="label">Password Confirmation</label>
                    <input
                      type="password"
                      className="input"
                      name="passwordConfirmation"
                      placeholder="Password Confirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* <p>{this.state}</p> */}
                  {(this.state.role === 'manager')&&
                <div className="field">
                  <input
                    type="input"
                    className="input"
                    name="companyPicture"
                    placeholder="Add your company picture URL here"
                    onChange={this.handleChange}
                  />
                </div>
                  }
                  <div className="register ">
                    Already a member?<Link to="/login" className="signUpSignInLink"> Sign in here</Link>
                  </div>
                  <button className="button signUp">SIGN UP</button>
                </form>
              </div>
              }
              {this.state.tabOpen &&
                <div className="companyLogo3">
                  <div className="title1">Sign Up for Employers</div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">Full Name</label>
                      <input
                        className="input"
                        name="fullName"
                        placeholder="e.g. John Doe"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        name="email"
                        placeholder="e.g. john@example.com"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Password Confirmation</label>
                      <input
                        type="password"
                        className="input"
                        name="passwordConfirmation"
                        placeholder="Password Confirmation"
                        onChange={this.handleChange}
                      />
                    </div>
                    {/* <p>{this.state}</p> */}
                    {(this.state.role === 'Employer')&&
                      <div className="field">
                        <label className="label">Company Picture URL</label>
                        <input
                          type="input"
                          className="input"
                          name="companyPicture"
                          placeholder="Add your company picture URL here"
                          onChange={this.handleChange}
                        />
                      </div>
                    }
                    <div className="register ">
                      Already a member?<Link to="/login" className="signUpSignInLink"> Sign in here</Link>
                    </div>
                    <button className="button signUp">SIGN UP</button>
                  </form>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthRegister;
