import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

class ProfileShow extends React.Component {
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
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)));
  }

  handleRequestAccept = (job, request) => {
    axios
      .put(`/api/jobs/${job._id}/requests/${request._id}`, null, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const index = this.state.user.jobs.findIndex(job => job._id === res.data._id);
        const jobs = [
          ...this.state.user.jobs.slice(0, index),
          res.data,
          ...this.state.user.jobs.slice(index+1)
        ];
        const user = { ...this.state.user, jobs };
        this.setState({ user });
      });

  }

  render(){
    console.log(this.state);
    const { user } = this.state;
    if(Object.keys(user).length === 0) return null;
    return (
      <div>
        <div className="columns is-multiline ">
        <div className="column is-2"></div>
        <div className="mainBody2 columns is-multiline">
          <div className="column is-four-fifths-desktop is-full-mobile is-full-tablet companyLogo">
            <div>
              {Auth.isCurrentUser(!user._id)&&
                <a className="emailIconShow" href={'mailto:' + `${user.email}`}>
                  <i className="far fa-envelope"></i>
                </a>
              }
              {Auth.isCurrentUser(user._id)&&
                <Link className="profileeditIconShow" to={`/profile/${user._id}/edit`}>
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
                {user.bio}
              </div>
            </div>
            {!user.picture &&
              <img className="userShowProfilePicture" src="https://i.imgur.com/pxca5Js.jpg" />
            }
            {user.picture &&
              <img className="userShowProfilePicture" src={user.picture} />
            }

          </div>
          {/* <div className="columns is-multiline"> */}
            {user.jobs.map(job =>
              <div className="column is-four-fifths-desktop is-full-mobile is-full-tablet " key={job._id}>
                {job.requests.map(request =>
                  <div key={request._id}>
                    {(request.status === 'pending') &&
                    <div className="card usersShowRequests">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            {request.user &&
                              <img className="userShowRequestProfilePicture" src={request.user.picture} />
                            }
                            <div className="userShowRequestsProfileDetails">
                              {request.user &&
                                <Link to={`/users/${request.user._id}`}>
                                  <div className="requesteeName">{request.user.fullName}</div>
                                  <div className="requesteeRole">{request.user.role}</div>
                                  <div className="requesteeEmailDetails">{request.user.email}</div>
                                  {/* <div className="requesteeStatus">{request.status}</div> */}
                                </Link>
                              }
                              {(request.status === 'pending')&&
                              <a onClick={() => this.handleRequestAccept(job, request)}  className="pendingRequestbutton" ><i className="fas fa-check"></i></a>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    }
                    {(request.status === 'rejected') &&
              <div className="card usersShowRequests">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      {request.user &&
                        <img className="userShowRequestProfilePicture" src={request.user.picture} />
                      }
                      <div className="userShowRequestsProfileDetails">
                        {request.user &&
                          <Link to={`/users/${request.user._id}`}>
                            <div className="requesteeName">{request.user.fullName}</div>
                            <div className="requesteeRole">{request.user.role}</div>
                            <div className="requesteeEmailDetails">{request.user.email}</div>
                            {/* <div className="requesteeStatus">{request.status}</div> */}
                          </Link>
                        }
                        {(request.status === 'rejected')&&
                        <a className="rejectRequestbutton" ><i className="fas fa-times"></i></a>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    }
                    {(request.status === 'accepted')&&
        <div className="cardAcceptedRequest usersShowRequestsAccepted">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                {request.user &&
                  <img className="userShowRequestProfilePicture" src={request.user.picture} />
                }
                <div className="userShowRequestsProfileDetails">
                  {request.user &&
                    <Link to={`/users/${request.user._id}`}>
                      <div className="requesteeName">{request.user.fullName}</div>
                      <div className="requesteeRole">{request.user.role}</div>
                      <div className="requesteeEmailDetails">{request.user.email}</div>
                    </Link>
                  }
                  <a className="acceptRequestbutton" ><i className="fas fa-check"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
                    }
                  </div>
                )}
              </div>
              )}
          {/* </div> */}
      </div>
    </div>
    </div>
    );
  }
}


export default ProfileShow;
