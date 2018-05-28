import React from 'react';

const SortFilterBar = ({ handleChange, data }) => {
  return(
    <div className="columns searchBar" >
      {!data.searchBar &&
      <div className="column is-5 is-full-desktop is-half-tablet">
        {/* <i className="fas fa-search listIcon"></i> */}
        <input className="input" placeholder="Search for people, jobs, companies and more..." name="search" onChange={handleChange} value={data.search}/>
      </div>
      }
      {/* <div className="field column is-5">
        <div className="control">
          <div className="select">
            <select onChange={handleChange} name="sort" value={data.sort}>
              <option value="name|asc">Name (A - Z)</option>
              <option value="name|desc">Name (Z - A)</option>
              <option value="price|desc">Price (Hi - Lo)</option>
              <option value="price|asc">Name (Lo - Hi)</option>
            </select>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SortFilterBar;
