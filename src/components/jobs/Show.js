// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Map from '../common/Map';
// import Auth from '../../lib/Auth';
// import Sidebar from '../Sidebar';
// import Navbar from '../Navbar';
// // import CommentForm from '../comments/Form';
//
// class JobsShow extends React.Component {
//   // In fact, `class` is not like a constructor in itself. It actually just invokes `constructor()` inside itself, and that's where the real constructing of the object occurs. There's a lot of stuff that React is doing under the hood, like attaching the methods onto the object.
//
//   state = {
//     comment: {}
//   }
//
//   componentDidMount() {
//     console.log(this.props.match.params.id);
//     axios
//       .get(`/api/jobs/${this.props.match.params.id}`)
//       .then(res => this.setState({ job: res.data }));
//   }
//
//   // handleDelete(id) {
//   //   // console.log(this.props.match.params.id);
//   //   axios
//   //     .delete(`/api/jobs/${id}`)
//   //     .then(() => this.props.history.push('/jobs'));
//   // }
//
//   handleDelete = () => {
//     axios
//       .delete(`/api/jobs/${this.props.match.params.id}`, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}`}
//       })
//       .then(() => this.props.history.push('/jobs'));
//   }
//
//   handleCommentChange = ({ target: { name, value }}) => {
//     const comment = { ...this.state.comment, [name]: value };
//     this.setState({ comment });
//   }
//
//   handleCommentSubmit = e => {
//     e.preventDefault();
//     const { id } = this.props.match.params;
//     axios
//       .post(`/api/jobs/${id}/comments`, this.state.comment, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}`}
//       })
//       .then(res => {
//         const job = res.data;
//         this.setState({ job, comment: {} });
//       });
//   }
//
//   handleCommentDelete = (commentId) => {
//     axios
//       .delete(`/api/jobs/${this.props.match.params.id}/comments/${commentId}`, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}`}
//       })
//       .then(res => this.setState({ job: res.data }));
//   }
//
//   // componentDidUpdate = () => {
//   //   axios
//   //     .get(`/api/jobs/${this.props.match.params.id}`)
//   //     .then(res => this.setState({ job: res.data }));
//   // }
//
//   render() {
//     const { job } = this.state;
//     if(!job) return null;
//     return (
//       <div>
//         <Navbar />
//         <Sidebar
//           showSearchBar={this.showSearchBar}
//           showListView={this.showListView}
//           hideListView={this.hideListView}
//         />
//         <div className="mainBody">
//           <div className="columns">
//             <div className="column is-one-fifth companyLogo indexList">is-one-fith
//
//             </div>
//             <div className="column is-two-fifths-desktop indexList">
//               <div className="mapCard">
//                 <Map
//                   center={job.location}
//                 />
//               </div>
//             </div>
//           </div>
//
//           <div>
//             {/* <CommentForm
//               handleCommentChange={this.handleCommentChange}
//               handleCommentSubmit={this.handleCommentSubmit}
//               data={this.state.comment}
//             /> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default JobsShow;


import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Map from '../common/Map';
import Auth from '../../lib/Auth';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
// import CommentForm from '../comments/Form';

class JobsShow extends React.Component {
  // In fact, `class` is not like a constructor in itself. It actually just invokes `constructor()` inside itself, and that's where the real constructing of the object occurs. There's a lot of stuff that React is doing under the hood, like attaching the methods onto the object.

  state = {
    comment: {}
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
    .get(`/api/jobs/${this.props.match.params.id}`)
    .then(res => this.setState({ job: res.data }));
  }

  // handleDelete(id) {
  //   // console.log(this.props.match.params.id);
  //   axios
  //     .delete(`/api/jobs/${id}`)
  //     .then(() => this.props.history.push('/jobs'));
  // }

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

  // componentDidUpdate = () => {
  //   axios
  //     .get(`/api/jobs/${this.props.match.params.id}`)
  //     .then(res => this.setState({ job: res.data }));
  // }

  render() {
    var styles = {
      backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png)'
    };
    const { job } = this.state;
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
                  <div className="tile is-child notification companyLogo" style={styles}/>
                  <article className="tile is-child notification is-white companyLogo">
                    <div>

                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child ">
                <div className="mapCard">
                  <Map
                    center={job.location}
                  />
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification ">
                <div className="contentMain">
                  <div className="content">
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div>
          {/* <CommentForm
            handleCommentChange={this.handleCommentChange}
            handleCommentSubmit={this.handleCommentSubmit}
            data={this.state.comment}
          /> */}
        </div>
      </div>
    );
  }
}

export default JobsShow;
