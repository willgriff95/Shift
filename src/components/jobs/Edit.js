import React from 'react';
import axios from 'axios';
import JobsForm from './Form';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Auth from '../../lib/Auth';
// import Flash from '../../lib/Flash';
// import UsersForm from './Form';

class JobsEdit extends React.Component {
  state = {
    errors: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState( res.data ));
  }

  // handleChange = ({ target: { name, value }}) => {
  //   this.setState({ user: {[name]: value} }, () => console.log(this.state));
  //   console.log(this.state);
  // }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log('inside submit button');
    const { id } = this.props.match.params;
    axios
      .put(`/api/jobs/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/jobs/${id}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    // if(Object.keys(this.state).length === 0) return null;
    return (
      <div>
        <Navbar />
        <Sidebar />
        <JobsForm
          job={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          // errors={this.state.errors}
        />
      </div>
    );
  }
}

export default JobsEdit;
