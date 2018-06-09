import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import axios from 'axios';

class Navbar extends React.Component {

  state = {
    navIsOpen: false,
    users: {}
  }
  // console.log(Auth.getPayload().sub)

  componentDidMount() {
    if(!Auth.isAuthenticated()) return false;
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ users: res.data }));
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    console.log(this.props);
    Auth.logout();
    this.props.history.push('/register');
  }

  render() {
    // console.log(this.state.users._id);
    if(this.state.users.picture ===  undefined ){
      var styles = {
        backgroundImage: 'url(https://i.imgur.com/pxca5Js.jpg)'
      };
    } else {
      styles = {
        backgroundImage: `url(${this.state.users.picture})`
      };
    }
    return (
      <div>
        <nav className="navbar ">
          <div className="navbar-brand">
            <img className="logo" src="https://i.imgur.com/b1yhImo.png" />
            {/* <div className="navbar-burger burger" data-target="navMenubd-example">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          </div>
          <div id="navMenubd-example" >
            {/* <div className="navbar-end"> */}
              {/* <div className="navbar-item userDetails"> */}
                {/* <span className="icon">
                <i className="fas fa-user"></i>
              </span> */}
                {/* <button  className="logOutButton" onClick={this.handleLogout}>Log Out</button> */}
                <Link to={`/profile/${this.state.users._id}`}  >
                  <div className="profilePicture" style={styles} />
                </Link>
              {/* </div> */}
            {/* </div> */}
          </div>
        </nav>

      </div>
    );
  }
}

export default withRouter(Navbar);
