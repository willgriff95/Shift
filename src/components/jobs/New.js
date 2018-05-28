import React from 'react';
import JobForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class JobsNew extends React.Component {

  state = {
    errors: {},
    jobs: []
  }

  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value });
  }

  handlePlaceChange = ({ formatted_address: address, geometry: {location}}) => {
    this.setState({ address: address, location: location.toJSON() });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/jobs', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/jobs'))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render () {
    return (
      <div>
        <JobForm
          job={this.state}
          handleChange={this.handleChange}
          handlePlaceChange={this.handlePlaceChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default JobsNew;
