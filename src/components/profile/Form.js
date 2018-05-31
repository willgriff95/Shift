import React from 'react';

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
                <div className="userShowProfileDetails">
                  <div className="profilemanagerName">
                    <input type="text" className="input" name="firstName" id="firstName3" value={user.firstName} onChange={handleChange} />

                    <input type="text" className="input" name="lastName" id="lastName3" value={user.lastName} onChange={handleChange} />
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
                  Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk
                </div>
              </div>
              <img className="userShowProfilePicture" src={user.picture} />
              <button className="button signUp">Submit</button>
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
