import React from 'react';
import axios from 'axios';
import ProfileForm from './Form';
import Navbar from '../Navbar';
import Auth from '../../lib/Auth';
// import ReactFilestack from 'filestack-react';

// import Flash from '../../lib/Flash';
// import UsersForm from './Form';

class ProfileEdit extends React.Component {
  state = {
    errors: {}
  };


  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/profile/${id}`, {
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
      .put(`/api/profile/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/profile/${id}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    // if(Object.keys(this.state).length === 0) return null;
    return (
      <div>
        <Navbar />
        <ProfileForm
          user={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          // errors={this.state.errors}
        />
      </div>
    );
  }
}

export default ProfileEdit;
