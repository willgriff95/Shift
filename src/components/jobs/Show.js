import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Map from '../common/Map';
import Auth from '../../lib/Auth';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import CommentShow from '../comments/Show';

class JobsShow extends React.Component {
  // In fact, `class` is not like a constructor in itself. It actually just invokes `constructor()` inside itself, and that's where the real constructing of the object occurs. There's a lot of stuff that React is doing under the hood, like attaching the methods onto the object.

  state = {
    comment: {}
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios
      .get(`/api/jobs/${this.props.match.params.id}`)
      .then(res => this.setState({ job: res.data }));
    // console.log(Auth.isCurrentUser('5b0d26bd8f8708a4dec8f707'));
    // console.log(Auth.isCurrentUser(Auth.getPayload().sub));
  }

  handleDelete = () => {
    axios
      .delete(`/api/jobs/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/jobs'));
  }

  handleCommentChange = ({ target: { name, value }}) => {
    const comment = { ...this.state.comment, [name]: value };
    this.setState({ comment });
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .post(`/api/jobs/${id}/comments`, this.state.comment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const job = res.data;
        this.setState({ job, comment: {} });
      });
  }

  handleCommentDelete = (commentId) => {
    axios
      .delete(`/api/jobs/${this.props.match.params.id}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ job: res.data }));
  }

  render() {
    const { job } = this.state;
    console.log(job);
    if(!job) return null;

    return (
      <div>
        <Navbar />
        <Sidebar
          showSearchBar={this.showSearchBar}
          showListView={this.showListView}
          hideListView={this.hideListView}
        />
        <div className="mainBody">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-3">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child notification companyLogo" style={{ backgroundImage: `url(${job.companyPicture})`}}>
                  </div>
                  <div className="tile is-child  is-white companyLogo">
                    <div className="payDetails">
                      <div className="dayRate">£{job.rate}</div>
                      <div className="dayRateText">/day rate</div>
                    </div>
                    <hr/>
                    <div className="contract">{job.hours} months</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <div className="mapCard">
                  <Map
                    center={job.location}
                  />
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child notification companyLogo">
                <div className="managerDetails">
                  <a className="emailIcon" href={'mailto:'+job.manager.email}>
                    <i className="far fa-envelope"></i>
                  </a>
                  <div className="managerName">{job.manager.firstName} {job.manager.lastName}</div>
                  <div className="hiringManager">Hiring Manager</div>
                  <div className="emailDetails">{job.manager.email}</div>
                  <div  /* style={styles2} */ />
                  <img className="managerProfilePicture" src={job.manager.picture} />
                </div>
                <hr/>
                <div className="jobDescription">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
          <div className="tile">
            <article className="tile is-child notification jobCommentsSection">
              <div className="content">

                <CommentShow
                  handleCommentDelete={this.handleCommentDelete}
                  job={this.state}
                  handleCommentChange={this.handleCommentChange}
                  handleCommentSubmit={this.handleCommentSubmit}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsShow;
