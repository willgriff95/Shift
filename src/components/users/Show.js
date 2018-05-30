import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import SortFilterBar from '../jobs/SortFilterBar';

class UsersShow extends React.Component {
  state = {
    user: {},
    errors: {}
  };


  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value },console.log(this.state));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios
      .get(`/api/users/${id}`)
      .then(res => this.setState({ user: res.data }, console.log(this.state)));
  }


  render(){
    console.log(this.state);
    const { user } = this.state;

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
              <div className="userShowProfileDetails">
                <a className="emailIcon" href={'mailto:' + `${user.email}`}>
                  <i className="far fa-envelope"></i>
                </a>
                <div className="managerName">{user.firstName} {user.lastName}</div>
                <div className="hiringManager">Hiring Manager</div>
                <div className="emailDetails">{user.email}</div>
                <div className="userShowCompanyPicture" style={{ backgroundImage: `url(${user.companyPicture})`}} />
              </div>
              <img className="userShowProfilePicture" src={user.picture} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default UsersShow;
