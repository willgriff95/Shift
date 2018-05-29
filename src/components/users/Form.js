import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class UsersForm extends React.Component {
  state = {
    user: {},
    errors: {}
  };


  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value },console.log(this.state));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios
      .get(`/api/users/${id}`)
      .then(res => this.setState({ user: res.data }, console.log(this.state)));
  }


  handleSubmit = e => {
    e.preventDefault();
    console.log('inside submit button');
    console.log(Auth.getToken(id));
    const { id } = this.props.match.params;
    axios
      .put(`/api/users/${id}/edit`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/users/${id}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }



  render(){
    console.log(this.state);
    return (
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
                    // placeholder={this.job.user.firstName}
                    // value={this.job.user.firstName || ''}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field lastName">
                  <input
                    type="text"
                    className="input"
                    name="lastName"
                    // placeholder={this.job.user.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    name="email"
                    id="email"
                    // placeholder={this.job.user.email}
                    // value={this.job.user.email || ''}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="**********"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    name="passwordConfirmation"
                    placeholder="**********"
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


export default UsersForm;
