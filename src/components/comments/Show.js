import React from 'react';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';


const commentsShow = ({  job , handleCommentDelete, handleCommentSubmit, handleCommentChange, handleRequestCreate}) => {
  const request = job.job.requests.find(request => request.user === Auth.getPayload().sub);
  const requestMade = request && request.status === 'pending';
  return (
    <div>
      {job.job.comments.map(comment =>
        <div key={comment._id}>
          {!comment.createdBy.picture &&
          <img className="indexManagerProfilePicture" src="https://i.imgur.com/pxca5Js.jpg" />
          }
          {comment.createdBy.picture &&
          <img className="indexManagerProfilePicture" src={comment.createdBy.picture} />
          }
          <div className="indexManagerDetails">
            {Auth.isCurrentUser(comment.createdBy.id)&&
              <div className="deleteComment">
                <a onClick={() => handleCommentDelete(comment._id)}>
                  <i className="fas fa-times"></i>
                </a>
              </div>
            }
            <Link to={`/users/${comment.createdBy.id}`}>
              {comment.createdBy.fullName &&
              <div className="managerName">{comment.createdBy.fullName}</div>
              }
              {/* <div className="hiringManager">Hiring Manager</div> */}
              {/* <div className="emailDetails">{comment.createdBy.email}</div> */}
              {comment.rating &&
                  <div>
                    <div className="averageRating2">
                      {/* <hr/> */}
                      <div className="averageRatingNumber2">{comment.rating}</div>
                      <div className="averageRatingBarBackgroundColor2"></div>
                      <div className="averageRatingBar2" style={{width: `calc(105*${comment.rating*2/10}px)`}}></div>
                      <div className="averageRatingBackground2"></div>
                    </div>
                  </div>
              }
              <p className="emailDetailsComments">{comment.content}</p>
            </Link>
          </div>
          {/* <img className="commentsProfilePicture" src={comment.createdBy.picture} /> */}
          <hr />
        </div>
      )}
      <form onSubmit={handleCommentSubmit}>
        <div className="field">
          <label htmlFor="name" className="">Comment</label>
          <textarea
            id="content"
            name="content"
            className="textarea"
            placeholder="Enter your comments here..."
            onChange={handleCommentChange} /* value={data.content || ''}*/
          />
        </div>
        <div className="field">
          <label htmlFor="name">Rating</label>
          <div className="control">
            <div className="select">
              <select
                id="rating"
                name="rating"
                onChange={handleCommentChange}
                // value={comment.rating || ''}
              >
                <option className="disabled">Please select</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
              </select>
            </div>
          </div>
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
