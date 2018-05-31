import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import { Link } from 'react-router-dom';

class AuthRegister extends React.Component {
  state = {
    role: 'freelance'
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

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="backgroundImageLoginRegister">
        </div>
        <div className="columns">
          <div className="column is-half-desktop">
            <div className="leftLoginRegisterContent">
              <div className="leftLoginRegisterLogo">
                <img src="https://i.imgur.com/kaiUv3m.png" height="200px"/>
              </div>
              <div className="copyrightText">
                Designed & Developed by <a href="https://www.linkedin.com/in/willgriff/">Will Griffiths</a>
              </div>
            </div>
          </div>
          <div className="column is-half-desktop is-full-mobile is-two-third-tablet ">
            <div className="rightRegisterContent companyLogo3">
              <div className="title1">SIGN UP</div>

              <form onSubmit={this.handleSubmit}>
                <div className="roleSelect">
                  Which are you?
                </div>
                <div className="noMarginTop field role select is-rounded ">
                  <select
                    className="input"
                    name="role"
                    placeholder="Role"
                    onChange={this.handleChange}
                  >
                    <option value="freelance">freelance</option>
                    <option value="manager">manager</option>
                  </select>
                </div>
                <div className="field firstName">
                  <input
                    className="input"
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field lastName">
                  <input
                    className="input"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
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
          </div>
        </div>
      </div>
    );
  }
}

export default AuthRegister;
