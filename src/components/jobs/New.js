import React from 'react';
// import JobForm from './Form';
import axios from 'axios';
import AutoComplete from '../common/AutoComplete';
import Auth from '../../lib/Auth';
import Navbar from '../Navbar';

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
        <div className="mainBody2">
          <div className="columns is-multiline">
            <div className="column is-four-fifths-desktop is-full-mobile is-two-third-tablet companyLogo2">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  {/* `htmlFor` is used for the purpose of escaping `for` (as in for loop) in JS */}
                  <label htmlFor="title">Title</label>
                  <input id="title2" name="title" className="input" placeholder="Title of role" onChange={this.handleChange} /* value={job.title || ''} *//>
                </div>
                <div className="field">
                  <label htmlFor="location">Location</label>
                  <AutoComplete id="location2" name="location" placeholder="Location" className="input" handlePlaceChange={this.handlePlaceChange}/>
                </div>
                <div className="field">
                  <label htmlFor="contract">Contract</label>
                  <input id="contract2" name="contract" className="input" placeholder="How many months contract..." onChange={this.handleChange} /* value={job.contract || ''} */ />
                </div>
                <div className="field">
                  <label htmlFor="rate">Rate</label>
                  <input id="rate2" name="rate" className="input" placeholder="Day Rate" onChange={this.handleChange} /* value={job.rate || ''} *//>
                </div>
                <div className="field">
                  <label htmlFor="description">Description</label>
                  <textarea id="description2" name="description" className="textarea" placeholder="Description" onChange={this.handleChange} /* value={job.description || ''} */ />
                </div>
                <button  className="submitbutton">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsNew;
