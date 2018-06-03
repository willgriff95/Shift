import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import { Link } from 'react-router-dom';


class AuthLogin extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/login', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/jobs'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid Credentials');
        this.props.history.replace('/login');
      });
  }

  render() {
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
          <div className="column is-half-desktop">
            <div className="rightLoginContent companyLogo4">
              <div className="title1">SIGN IN</div>

              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      className="input"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    {/* <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span> */}
                    {/* <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span> */}
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      type="password"
                      className="input"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    {/* <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span> */}
                    {/* <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span> */}
                  </p>
                </div>
                <div className="register">
                  New to shift? <Link to="/register" className="signUpSignInLink">Sign up now</Link>

                </div>
                <button className="button">SIGN IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthLogin;
