import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Map from '../common/Map';
import Auth from '../../lib/Auth';
import CommentShow from '../comments/Show';



class JobsShow extends React.Component {
  // In fact, `class` is not like a constructor in itself. It actually just invokes `constructor()` inside itself, and that's where the real constructing of the object occurs. There's a lot of stuff that React is doing under the hood, like attaching the methods onto the object.

  state = {
    requestButtonClicked: false,
    averageRating: null,
    averageRatingArray: [],
    job: {}
  }

  componentDidMount() {
    const averageRatingArray = [];
    // console.log(this.props.match.params.id);
    axios
      .get(`/api/jobs/${this.props.match.params.id}`)
      .then(res => this.setState({ job: res.data }, () => {
        this.state.job.comments.map(comment =>
          averageRatingArray.push(comment.rating)
        );
        this.setState({averageRatingArray: this.state.averageRatingArray.concat([averageRatingArray])}, () => {
          var sum = 0;
          for( var i = 0; i < this.state.averageRatingArray.length; i++ ){
            sum += parseInt( this.state.averageRatingArray[i], 10 ); //don't forget to add the base
          }
          var avg = sum/this.state.averageRatingArray.length;
          this.setState({ averageRating: avg});
          console.log(this.state);
        });
      }));
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
    const averageRatingArray = [];
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .post(`/api/jobs/${id}/comments`, this.state.comment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const newState = Object.assign({}, this.state);
        newState.job.comments = res.data.comments;
        this.setState(newState);
        newState.job.comments.map(comment =>
          averageRatingArray.push(comment.rating),
        );
        this.setState({ averageRatingArray: averageRatingArray });
        var sum = 0;
        for( var i = 0; i < this.state.averageRatingArray.length; i++ ){
          sum += parseInt( this.state.averageRatingArray[i], 10 ); //don't forget to add the base
        }
        var avg = sum/this.state.averageRatingArray.length;
        this.setState({ averageRating: avg });
      }, () => {
        console.log(this.state);



      }
      );
  }

  handleCommentDelete = (commentId) => {
    axios
      .delete(`/api/jobs/${this.props.match.params.id}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ job: res.data }, () => {
        console.log(res.data);
      }));
  }

  handleRequestCreate = () => {
    console.log('request created');
    const { id } = this.props.match.params;
    axios
      .post(`/api/jobs/${id}/requests`, this.state.comment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.setState({ requestButtonClicked: true }))
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { job } = this.state;
    // console.log(this.state);
    if(!job) return null;
    return (
      <div>
        {job.manager &&
          <div className="">
            <div className="columns is-multiline ">
              <div className="column is-2">
              </div>
              <div className="column is-three-fifths-desktop is-four-fifths-tablet is-four-fifths-mobile jobShowContent">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-3">
                    <div className="tile">
                      <div className="tile is-parent is-vertical jobDetails">
                        {!job.manager.companyPicture &&
                          <div className="tile is-child notification companyLogo">
                            {this.state.averageRating[0] &&
                              <div className="averageRating">{this.state.averageRating}</div>
                            }
                          </div>
                        }
                        {job.manager.companyPicture &&
                          <div className="tile is-child notification companyLogo" style={{ backgroundImage: `url(${job.manager.companyPicture})`}}>
                            {this.state.averageRating &&
                              <div className="averageRating">{this.state.averageRating}</div>
                            }
                          </div>
                        }
                        <div className="tile is-child  is-white companyLogo">
                          <div className="payDetails">
                            <div className="dayRate">£{job.rate}</div>
                            <div className="dayRateText">/day rate</div>
                          </div>
                          <hr/>
                          <div className="contract">{job.contract} months</div>
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
                        {!Auth.isCurrentUser(job.manager._id)&&
                          <a className="emailIcon" href={'mailto:' + `${job.manager.email}`}>
                            <i className="far fa-envelope"></i>
                          </a>
                        }
                        {Auth.isCurrentUser(job.manager._id)&&
                          <Link className="jobseditIconShow" to={`/jobs/${job._id}/edit`}>
                            <i className="far fa-edit"></i>
                          </Link>
                        }
                        {Auth.isCurrentUser(job.manager._id)&&
                          <a className="deleteIcon" onClick={this.handleDelete}>
                            <i  className="far fa-trash-alt"></i>
                          </a>
                        }
                        <Link to={`/users/${job.manager._id}`}>
                          <div className="managerName">{job.manager.fullName}</div>
                          <div className="hiringManager">{job.manager.role}</div>
                          <div className="emailDetails">{job.manager.email}</div>
                          <div  /* style={styles2} */ />
                          {job.manager.picture &&
                            <img className="jobshowmanagerProfilePicture" src={job.manager.picture} />
                          }
                        </Link>
                      </div>
                      <hr/>
                      <div className="jobDescription">
                        {job.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile">
                  <article className="tile is-child notification jobCommentsSection">
                    <div className="content">
                      <CommentShow
                        handleRequestCreate={this.handleRequestCreate}
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
          </div>
        }
      </div>
    );
  }
}

export default JobsShow;
