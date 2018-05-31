import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../lib/Auth';
import axios from 'axios';



class Sidebar extends React.Component {
  state = {
    jobs: [],
    search: '',
    sort: 'title|asc',
    searchBar: true
  }


  showSearchBar = () => this.setState({ searchBar: !this.state.searchBar });

  handleLogout = () => {
    Auth.logout();
    console.log(this.props);
    this.props.history.push('/register');
  }

  componentDidMount() {
    const currentUserId = Auth.getPayload().sub;
    axios
      .get(`/api/users/${currentUserId}`)
      .then(res => this.setState({ user: res.data }));
  }
  render(){
    // console.log(Auth.getPayload().sub);
    const { user } = this.state;
    // console.log(user.role);

    return(
      <div className="columns is-fullheight sideBarMain">
        <div className="column is-2 is-sidebar-menu is-hidden-mobile">
          <aside className="menu">
            <ul className=" sidebar">
              {/* <hr/> */}
              <Link to="/jobs">
                <li onClick={this.showSearchBar} className="iconSidebar" >
                  <div className="listItem"><i className="fas fa-search listIcon"></i> Search</div>
                </li>
              </Link>

              {/* </Link> */}
              {/* <hr/> */}
              {user && (user.role === 'manager')&&
                <Link to="/jobs/new">
                  {/* <p>{user.role}</p> */}
                  <li className="iconSidebar">
                    <div className="listItem"><i className="fas fa-plus listIcon"></i> Add Job</div>
                  </li>
                </Link>
              }
              <hr/>
              {/* <Link to="/jobs/new">
                <li className="iconSidebar">
                  <div className="listItem"><i className="fas fa-suitcase listIcon"></i> Jobs</div>
                </li>
              </Link> */}
              {Auth.getPayload().sub &&
                <Link to={`/profile/${Auth.getPayload().sub}`}>
                  <li className="iconSidebar">
                    <div className="listItem"><i className="fas fa-user listIcon"></i> Account</div>
                  </li>
                </Link>
              }
              <li className="iconSidebar" onClick={this.handleLogout}>
                <div className="listItem"><i className="fas fa-user listIcon"></i> Log Out</div>
              </li>

            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default Sidebar;
