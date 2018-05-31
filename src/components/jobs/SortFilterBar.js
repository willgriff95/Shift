import React from 'react';

const SortFilterBar = ({ handleChange, data }) => {
  return(
    <div>
      <div className="searchBarBackground">
      </div>
      <div className="columns searchBar" >
        {!data.searchBar &&
          <div className="column is-5 is-full-desktop is-half-tablet">
            {/* <i className="fas fa-search listIcon"></i> */}
            <input className="input" placeholder="Search for people, jobs, companies and more..." name="search" onChange={handleChange} value={data.search}/>
          </div>
        }
      </div>
    </div>
  );
};

export default SortFilterBar;
