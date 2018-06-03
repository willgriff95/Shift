import React from 'react';
// import { client } from 'filestack-react';
// const filestack = client.init('A06LnFQSXRbe2qEOmejwkz', security);


const ProfileForm = ({ handleChange, handleSubmit, user }) => {
  // console.log(user.user);
  // We want to check if there's a truthy value in the value of the error itself.
  // const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div className="mainBody2">
      <div className="columns is-multiline">
        <div className="column is-four-fifths-desktop is-full-mobile is-two-third-tablet companyLogo">
          {user &&
            <form onSubmit={handleSubmit}>
              <div>
                <button id="profileeditCompletedButton">
                  <a className="deleteIcon2">
                    <i className="fas fa-check"></i>
                  </a>
                </button>
                <div className="userShowProfileDetails">
                  <div className="profilemanagerName">
                    <input type="text" className="input" name="fullName" id="lastName3" value={user.fullName} onChange={handleChange} />
                  </div>
                  <div className="profilehiringManager">{user.role}</div>
                  <div className="profileemailDetails">
                    <input type="text" className="input" name="email" id="email3" value={user.email} onChange={handleChange} />
                  </div>
                  <div className="userShowCompanyPicture" style={{ backgroundImage: `url(${user.companyPicture})`}} />
                </div>
              </div>

              <hr />
              <div className="userShowBio">
                <div className="userShowBioDetails">
                  <textarea id="bio" name="bio" className="textarea jobDescription" placeholder="Tell people about your professional career" onChange={handleChange} value={user.bio} />
                </div>
              </div>
              <img className="userShowProfilePicture" src={user.picture} />
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;





// <input type="text" className="input" name="companyPicture" id="companyPicture" value={user.companyPicture} onChange={handleChange} />

// <input type="text" className="input" name="picture" id="picture" value={user.picture} onChange={handleChange} />
