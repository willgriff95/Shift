import React from 'react';

const SortFilterBar = ({ handleChange, data }) => {
  return(
    <div>
      {!data.searchBar &&
        <input className="input input2" placeholder="Search for people, jobs, companies and more..." name="search" onChange={handleChange} value={data.search}/>
      }
      <hr className="indexhr"/>
    </div>
  );
};

export default SortFilterBar;
