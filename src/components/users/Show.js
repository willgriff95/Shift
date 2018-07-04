import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

class UsersShow extends React.Component {
  state = {
    user: {},
    errors: {}
  };


  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/users/${id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleRequestAccept = (job, request) => {
    axios
      .put(`/api/jobs/${job._id}/requests/${request._id}`, null, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ job: res.data }));
  }

  render(){
    console.log(this.state);
    const { user } = this.state;
    if(Object.keys(user).length === 0) return null;
    return (
      <div>
        <Navbar />
        <div className="mainBody2">
          <div className="columns is-multiline">
            <div className="column is-four-fifths-desktop is-full-mobile is-two-third-tablet companyLogo">
              <div>
                {Auth.isCurrentUser(!user._id)&&
                <a className="emailIconShow" href={'mailto:' + `${user.email}`}>
                  <i className="far fa-envelope"></i>
                </a>
                }
                {Auth.isCurrentUser(user._id)&&
                <a className="deleteIconShow" onClick={this.handleDelete}>
                  <i  className="far fa-trash-alt"></i>
                </a>
                }
                {Auth.isCurrentUser(user._id)&&
                <Link className="editIconShow" to={`/profile/${user._id}/edit`}>
                  <i className="far fa-edit"></i>
                </Link>
                }
                <div className="userShowProfileDetails">
                  <div className="profilemanagerName">{user.fullName}</div>
                  <div className="profilehiringManager">{user.role}</div>
                  <div className="profileemailDetails">{user.email}</div>
                  <div className="userShowCompanyPicture" style={{ backgroundImage: `url(${user.companyPicture})`}} />
                </div>
              </div>
              <hr />
              <div className="userShowBio">
                <div className="userShowBioDetails">
                  Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk
                </div>
              </div>
              {!user.picture &&
                <img className="userShowProfilePicture" src="https://i.imgur.com/pxca5Js.jpg" />
              }
              {user.picture &&
                <img className="userShowProfilePicture" src={user.picture} />
              }
            </div>
          </div>
          <div className="columns is-multiline">
            {user.jobs.map(job =>
              <div className="column is-four-fifths-desktop is-full-tablet is-mobile" key={job._id}>
                {job.requests.map( request =>
                  <div key={request._id}>
                    <div className="card usersShowRequests">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <img className="userShowRequestProfilePicture" src={request.user.picture} />
                            <div className="userShowRequestsProfileDetails">
                              <Link to={`/users/${request.user._id}`}>
                                <div className="requesteeName">{request.user.fullName}</div>
                                <div className="requesteeRole">{request.user.role}</div>
                                <div className="requesteeEmailDetails">{request.user.email}</div>
                                {/* <div className="requesteeStatus">{request.status}</div> */}
                              </Link>
                              {(request.status === 'pending')&&
                                <a onClick={() => this.handleRequestAccept(job, request)}  className="acceptRequestbutton" ><i className="fas fa-check"></i>Pending</a>
                              }
                              {(request.status === 'accepted')&&
                                <a className="acceptRequestbutton" ><i className="fas fa-check"></i>Accepted</a>
                              }
                              {(request.status === 'rejected')&&
                                <a className="acceptRequestbutton" ><i className="fas fa-times"></i>Rejected</a>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default UsersShow;
