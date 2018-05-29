import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import Flash from '../../lib/Flash';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import SortFilterBar from '../jobs/SortFilterBar';
// import UsersForm from './Form';
class UsersEdit extends React.Component {
  state = {
    errors: {},
    user: {
      firstName: '',
      lastName: '',
      email: ''

    }
  };


    handleChange = ({ target: { name, value }}) => {
      this.setState({ user: {[name]: value} }, () => console.log(this.state));
      console.log(this.state);
    }

    componentDidMount() {
      const { id } = this.props.match.params;
      axios
        .get(`/api/users/${id}`)
        .then(res => this.setState({ user: res.data }));
    }


    handleSubmit = (e) => {
      e.preventDefault();
      // console.log('inside submit button');
      const { id } = this.props.match.params;
      axios
        .put(`/api/users/${id}`, this.state, {
          headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
        .then(() => this.props.history.push(`/users/${id}/edit`))
        .catch(err => this.setState({errors: err.response.data.errors}));
    }

    render() {
      return (
        <div>
          <Navbar />
          <Sidebar />
          <SortFilterBar
            handleChange={this.handleChange}
            data={this.state}
          />
          <div>
            <div className="mainBody">
              <div className="columns">
                <div className="column is-half-desktop is-full-mobile is-two-third-tablet companyLogo">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field firstName">
                      <input
                        type="text"
                        className="input"
                        name="firstName"
                        placeholder={this.state.user.firstName}
                        value={this.state.user.firstName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field lastName">
                      <input
                        type="text"
                        className="input"
                        name="lastName"
                        placeholder={this.state.user.lastName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        className="input"
                        name="email"
                        id="email"
                        placeholder={this.state.user.email}
                        value={this.state.user.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button className="button signUp">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default UsersEdit;
