import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import SortFilterBar from '../jobs/SortFilterBar';

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
    console.log('mounted');
    axios
      .get(`/api/users/${id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleRequestAccept = (requestId) => {
    const { id } = this.props.match.params;
    axios
      .put(`/jobs/${id}/requests/${requestId}`);
  }


  render(){
    console.log(this.state);
    const { user } = this.state;
    if(Object.keys(user).length === 0) return null;
    return (
      <div>
        <Navbar />
        <Sidebar />
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
        />
        <div className="mainBody">
          <div className="columns">
            <div className="column is-four-fifths-desktop is-full-mobile is-two-third-tablet companyLogo">
              <div>
                <div className="userShowProfileDetails">
                  <a className="emailIcon" href={'mailto:' + `${user.email}`}>
                    <i className="far fa-envelope"></i>
                  </a>
                  <div className="managerName">{user.firstName} {user.lastName}</div>
                  <div className="hiringManager">Hiring Manager</div>
                  <div className="emailDetails">{user.email}</div>
                  <div className="userShowCompanyPicture" style={{ backgroundImage: `url(${user.companyPicture})`}} />
                </div>
              </div>
              <hr />
              <div className="userShowBio">
                <div className="userShowBioDetails">
                  Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk
                </div>
              </div>
              <img className="userShowProfilePicture" src={user.picture} />
            </div>
          </div>
          <div className="columns ">
            {user.jobs.map(job =>
              <div className="column is-four-fifths-desktop is-full-tablet is-mobile" key={job._id}>
                <Link to={`/users/${user.id}`}>
                  {job.requests.map( request =>
                    <div key={request._id}>
                      <div className="card usersShowRequests">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <img className="userShowProfilePicture" src={request.user.picture} />
                              <div className="userShowRequestsProfileDetails">
                                {/* {job.requests &&
                                  // <p>{job.requests}</p>
                                } */}
                                <p>{request.user.firstName} {request.user.lastName}</p>
                                <p>{request.status}</p>
                                <button  className="acceptRequestbutton" ><i className="fas fa-check"></i></button>
                              </div>
                            </div>
                            {/* <img className="indexManagerProfilePicture" src={job.manager.picture} />
                            <div className="indexManagerDetails">
                            <div className="managerName">{job.manager.firstName} {job.manager.lastName}</div>
                            <div className="hiringManager">Hiring Manager</div>
                            <div className="emailDetails">{job.manager.email}</div>
                          </div> */}
                            {/* <p className="indexJobTitle">{job.contract}</p> */}
                            {/* <img className="managerProfilePicture" src={request.picture} /> */}
                            {/* <div className=" indexCompanyPicture" style={{ backgroundImage: `url(${job.companyPicture})`}} /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default UsersShow;
