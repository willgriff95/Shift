import React from 'react';
import axios from 'axios';
// import JobsForm from './Form';
import Navbar from '../Navbar';
import Auth from '../../lib/Auth';
// import ReactFilestack from 'filestack-react';
import { Link } from 'react-router-dom';
import Map from '../common/Map';

// import Flash from '../../lib/Flash';
// import UsersForm from './Form';

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class JobsEdit extends React.Component {
  state = {
    errors: {}
  };

  onSuccess = (result) => {
    this.setState({
      image: result.filesUploaded[0].url
    });
  }


  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState( res.data ));
  }

  // this.handleChange = ({ target: { name, value }}) => {
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
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <div className="mainBody2">
          <form onSubmit={this.handleSubmit}>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-3">
                <div className="tile">
                  <div className="tile is-parent is-vertical">

                    {this.state.manager &&
                      <div className="tile is-child notification companyLogo" style={{ backgroundImage: `url(${this.state.manager.companyPicture})`}}>
                      </div>
                    }
                    <div className="tile is-child  is-white companyLogo">
                      <div className="payDetails">
                        <div className="dayRate">£
                        <input id="rate" name="rate" className="input dayRate"  onChange={this.handleChange} value={this.state.rate || ''} />
                        </div>
                        <div className="dayRateText">/day rate</div>
                      </div>
                      <hr/>
                      <div className="contract">
                        <input id="contract" name="contract" className="input" onChange={this.handleChange} value={this.state.contract || ''} />
                        months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <div className="mapCard">
                    {this.state.location &&
                        <Map
                          center={this.state.location}
                        />
                    }
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child notification companyLogo">
                  <div className="managerDetails">
                    <button id="editCompletedButton">
                      <a className="deleteIcon">
                        <i className="fas fa-check"></i>
                      </a>
                    </button>
                    {this.state.manager &&
                      <Link to={`/users/${this.state.manager._id}`}>
                        <div className="managerName">{this.state.manager.fullName}</div>
                        <div className="hiringManager">{this.state.manager.role}</div>
                        <div className="emailDetails">{this.state.manager.email}</div>
                        <img className="jobshowmanagerProfilePicture" src={this.state.manager.picture} />
                      </Link>
                    }
                  </div>
                  <hr/>
                  {/* <ReactFilestack
                    apikey="A06LnFQSXRbe2qEOmejwkz"
                    buttonText="Upload Photo"
                    buttonClass="button redirectButton"
                    options={basicOptions}
                    onSuccess={this.onSuccess}
                    onChange={this.handleChange}
                    onError={this.onError}
                  /> */}
                  <div className="jobDescription">
                    <textarea id="description" name="description" className="textarea jobDescription" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default JobsEdit;
