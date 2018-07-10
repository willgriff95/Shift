import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import axios from 'axios';

class Navbar extends React.Component {

  state = {
    navIsOpen: false,
    user: {},
    jobs: [],
    search: '',
    sort: 'title|asc',
    searchBar: true
  }
  // console.log(Auth.getPayload().sub)

  componentDidMount() {
    if(!Auth.isAuthenticated()) return false;
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    // console.log(this.props);
    Auth.logout();
    this.props.history.push('/register');
  }

  render() {
    if(this.state.user.picture ===  undefined ){
      var styles = {
        backgroundImage: 'url(https://i.imgur.com/pxca5Js.jpg)'
      };
    } else {
      styles = {
        backgroundImage: `url(${this.state.user.picture})`
      };
    }
    return (
      <div className="columns is-fullheight sideBarMain">
        {Auth.isAuthenticated() &&
        <div className="column is-2 is-sidebar-menu">
          <aside className="menu">
            {this.state.user.picture &&
            <Link to={`/profile/${this.state.user._id}`}  >
              <div className="profilePicture" style={styles} />
            </Link>
            }
            <div className="userNameNavbar">{this.state.user.fullName}</div>
            <div className="userRoleNavbar">{this.state.user.role}</div>
            {/* <div className="userEmailNavbar">{this.state.user.email}</div> */}
            <ul className=" sidebar">
              {/* <Link to="/jobs">
                <li onClick={this.showSearchBar} className="iconSidebar" >
                  <i className="fas fa-users listIcon"></i>
                  <br/>
                  <div className="listItem">Find<br/>Freelancer</div>
                </li>
              </Link> */}
              {this.state.user && (this.state.user.role === 'Employer')&&
                <Link to="/jobs/new">
                  {/* <p>{user.role}</p> */}
                  <li className="iconSidebarAdd">
                    <i className="fas fa-plus listIcon"></i>
                    <br/>
                    <div className="listItem">Add Job</div>
                  </li>
                </Link>
              }
              <Link to="/jobs">
                <li className="iconSidebar">
                  <i className="fas fa-suitcase listIcon"></i>
                  <br/>
                  <div className="listItem"> Browse<br/>Contracts</div>
                </li>
              </Link>
              {Auth.isAuthenticated() &&
                <Link to={`/profile/${Auth.getPayload().sub}`}>
                  <li className="iconSidebar">
                    <i className="fas fa-user listIcon">
                    </i>
                    <br/>
                    <div className="listItem">
                    Account</div>
                  </li>
                </Link>
              }
              {Auth.isAuthenticated() &&

              <li className="iconSidebar" onClick={this.handleLogout}>
                <i className="fas fa-sign-out-alt listIcon"></i>
                <br/>
                <div className="listItem">Log Out</div>
              </li>
              }
              {/* <img className="logo" src="https://i.imgur.com/b1yhImo.png" /> */}
            </ul>
          </aside>
        </div>
        }
      </div>
    );
  }
}

export default withRouter(Navbar);
