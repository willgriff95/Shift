import React from 'react';
import Auth from '../../lib/Auth';

const commentsShow = ({  job , handleCommentDelete, handleCommentSubmit, handleCommentChange, handleRequestCreate}) => {
  // console.log(job.job.requests[0].user);
  // console.log(Auth.getPayload().sub);
  console.log(job);
  console.log(job.requestButtonClicked);
  const request = job.job.requests.find(request => request.user === Auth.getPayload().sub);
  const requestMade = request && request.status === 'pending';
  return (
    <div>

      {job.job.comments.map(comment =>
        <div key={comment._id}>
          {/* <p className="commentsContent">{comment.createdBy.firstName} {comment.createdBy.lastName}</p> */}
          <img className="indexManagerProfilePicture" src={comment.createdBy.picture} />
          <div className="indexManagerDetails">
            {Auth.isCurrentUser(comment.createdBy.id)&&
              <div className="deleteComment">
                <a onClick={() => handleCommentDelete(comment._id)}>
                  <i className="fas fa-times" onClick={() => handleCommentDelete(comment._id)}></i>
                </a>
              </div>
            }
            <div className="managerName">{comment.createdBy.firstName} {comment.createdBy.lastName}</div>
            {/* <div className="hiringManager">Hiring Manager</div> */}
            {/* <div className="emailDetails">{comment.createdBy.email}</div> */}
            <p className="emailDetails">{comment.content}</p>
          </div>
          {/* <img className="commentsProfilePicture" src={comment.createdBy.picture} /> */}
          <hr />
        </div>
      )}
      <form onSubmit={handleCommentSubmit}>
        <div className="field">
          <label htmlFor="name" className="">Comment</label>
          <textarea id="content" name="content" className="textarea" placeholder="Enter your comments here..." onChange={handleCommentChange} /* value={data.content || ''}*/ />
        </div>
        <button className="submitbutton"><i className="fas fa-comments"></i>  Submit</button>
      </form>

      {(job.requestButtonClicked === false) &&
        <button  onClick={handleRequestCreate} disabled={requestMade} className="requestbutton" ><i className="fas fa-check"></i> Send Request</button>
      }
      {(job.requestButtonClicked === true) &&
        <button  onClick={handleRequestCreate} disabled={requestMade} className="requestPendingButton" ><i className="fas fa-check"></i> Request Pending</button>
      }
      {/* <button onClick={handleRequestCreate} className="requestbutton "><i className="fas fa-check"></i> Request Sent</button> */}

    </div>
  );
};

export default commentsShow;
