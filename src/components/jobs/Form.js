import React from 'react';
import AutoComplete from '../common/AutoComplete';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const JobForm = ({ handleChange, handlePlaceChange, handleSubmit, errors }) => {
  // We want to check if there's a truthy value in the value of the error itself.
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mainBody">
        <form onSubmit={handleSubmit}>
          <div className="field">
            {/* `htmlFor` is used for the purpose of escaping `for` (as in for loop) in JS */}
            <label htmlFor="title">Title</label>
            <input id="title" title="title" className="input" placeholder="Name" onChange={handleChange} /* value={job.title || ''} *//>
            {errors.title && <small>{errors.title}</small>}
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <AutoComplete id="location" name="location" placeholder="location" className="input" handlePlaceChange={handlePlaceChange}/>
            {errors.location && <small>{errors.location}</small>}
          </div>
          <div className="field">
            <label htmlFor="hours">Hours</label>
            <input id="hours" name="hours" className="input" placeholder="Restaurant" onChange={handleChange} /* value={job.hours || ''} */ />
            {errors.hours && <small>{errors.hours}</small>}
          </div>
          <div className="field">
            <label htmlFor="rate">Rate</label>
            <input id="rate" name="rate" className="input" placeholder="Image" onChange={handleChange} /* value={job.rate || ''} *//>
            {errors.rate && <small>{errors.rate}</small>}
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" className="textarea" placeholder="Description" onChange={handleChange} /* value={job.description || ''} */ />
            {errors.description && <small>{errors.description}</small>}
          </div>
          <button disabled={formInvalid} className="button is-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
