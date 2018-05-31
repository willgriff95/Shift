import React from 'react';

const ProfileForm = ({ handleChange, handleSubmit, user }) => {
  // console.log(user.user);
  // We want to check if there's a truthy value in the value of the error itself.
  // const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div className="mainBody">
      <div className="columns">
        <div className="column is-half-desktop is-full-mobile is-two-third-tablet companyLogo">
          <form onSubmit={handleSubmit}>
            {user &&
              <div>
                <div className="field firstName">
                  <input
                    type="text"
                    className="input"
                    name="firstName"
                    id="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field lastName">
                  <input
                    type="text"
                    className="input"
                    name="lastName"
                    id="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    name="companyPicture"
                    id="companyPicture"
                    value={user.companyPicture}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    name="picture"
                    id="picture"
                    value={user.picture}
                    onChange={handleChange}
                  />
                </div>
              </div>
            }
            <button className="button signUp">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
