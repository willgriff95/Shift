import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import Flash from '../../lib/Flash';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import SortFilterBar from '../jobs/SortFilterBar';

class UsersShow extends React.Component {
  state = {
  };
  componentDidMount() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ users: res.data }));
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <Sidebar
          showSearchBar={this.showSearchBar}
          showListView={this.showListView}
          hideListView={this.hideListView}
        />
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
        />
        <div className="mainBody">
          <div className="columns">
            <div className="column is-half-desktop is-full-mobile is-two-third-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field firstName">
                  <input
                    type="text"
                    className="input"
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field lastName">
                  <input
                    type="text"
                    className="input"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
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
                <button className="button signUp">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersShow;
