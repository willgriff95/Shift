import React from 'react';
import AutoComplete from '../common/AutoComplete';
import { Link } from 'react-router-dom';
import Map from '../common/Map';


const JobForm = ({ handleChange, handlePlaceChange, handleSubmit, job  }) => {
  // We want to check if there's a truthy value in the value of the error itself.
  // const formInvalid = Object.keys(errors).some(key => errors[key]);
  console.log(job);
  return (
    <div>
      <div className="mainBody2">
        <form onSubmit={handleSubmit}>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-3">
              <div className="tile">
                <div className="tile is-parent is-vertical">

                  {job.manager &&
                    <div className="tile is-child notification companyLogo" style={{ backgroundImage: `url(${job.manager.companyPicture})`}}>
                    </div>
                  }
                  <div className="tile is-child  is-white companyLogo">
                    <div className="payDetails">
                      <div className="dayRate">£
                      <input id="rate" name="rate" className="input dayRate" placeholder="Restaurant" onChange={handleChange} value={job.rate} />
                      </div>
                      <div className="dayRateText">/day rate</div>
                    </div>
                    <hr/>
                    <div className="contract">
                      <input id="contract" name="contract" className="input" placeholder="Restaurant" onChange={handleChange} value={job.contract} />
                      months</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <div className="mapCard">
                  {job.location &&
                      <Map
                        center={job.location}
                      />

                  }
                  {/* <AutoComplete id="location" name="location" placeholder="location" className="input" handlePlaceChange={handlePlaceChange}/> */}
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child notification companyLogo">
                <div className="managerDetails">
                  {job.manager &&
                    <Link to={`/users/${job.manager._id}`}>
                      <div className="managerName">{job.manager.firstName} {job.manager.lastName}</div>
                      <div className="hiringManager">Hiring Manager</div>
                      <div className="emailDetails">{job.manager.email}</div>
                      <img className="managerProfilePicture" src={job.manager.picture} />
                    </Link>
                  }
                </div>
                <hr/>
                <div className="jobDescription">
                  <textarea id="description" name="description" className="textarea jobDescription" placeholder="Description" onChange={handleChange} value={job.description} />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            {/* `htmlFor` is used for the purpose of escaping `for` (as in for loop) in JS */}
            <input id="title" title="title" className="input" placeholder="Name" onChange={handleChange} value={ job.title } />
          </div>
          <div className="field">
          </div>
          <div className="field">
          </div>


          <button className="button is-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
