import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ showSearchBar, showListView, hideListView }) => {
  return(
    <div className="columns is-fullheight sideBarMain">
      <div className="column is-2 is-sidebar-menu is-hidden-mobile">
        <aside className="menu">
          <ul className=" sidebar">
            {/* <hr/> */}
            <Link to="/jobs">
              <li  onClick={showListView} className="iconSidebar">
                <div className="listItem"><i className="fas fa-map-marker-alt listIcon"></i> Map</div>
              </li>
            </Link>
            {/* <hr/> */}
            <Link to="/jobs">
              <li onClick={hideListView} className="iconSidebar">
                <div className="listItem"><i className="fas fa-list-ul listIcon"></i> List</div>
              </li>
            </Link>
            {/* <hr/> */}
            <Link to="/jobs">
              <li onClick={showSearchBar} className="iconSidebar" >
                <div className="listItem"><i className="fas fa-search listIcon"></i> Search</div>
              </li>
            </Link>
            {/* <hr/> */}
            <Link to="/jobs/new">
              <li className="iconSidebar">
                <div className="listItem"><i className="fas fa-plus listIcon"></i> Add Job</div>
              </li>
            </Link>
            <hr/>
            <Link to="/jobs/new">
              <li className="iconSidebar">
                <div className="listItem"><i className="fas fa-suitcase listIcon"></i> Jobs</div>
              </li>
            </Link>
            {/* <Link to={`/users/${state.users._id}`}> */}
            <li className="iconSidebar">
              <div className="listItem"><i className="fas fa-user listIcon"></i> Account</div>
            </li>
            {/* </Link> */}

          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
