import React from 'react';
import Auth from '../../lib/Auth';


const commentsShow = ({  job , handleCommentDelete, handleCommentSubmit, handleCommentChange}) => {
  // console.log(Auth.isCurrentUser(comment.createdBy));
  return (
    <div>

      {job.job.comments.map(comment =>
        <div key={comment._id}>
          <p className="commentsContent">{comment.createdBy.firstName} {comment.createdBy.lastName}</p>
          <img className="commentsProfilePicture" src={comment.createdBy.picture} />
          <p className="commentsContent">{comment.content}</p>
          {Auth.isCurrentUser(comment.createdBy.id)&&
            <div>
              <button className="button is-danger" onClick={() => handleCommentDelete(comment._id)}>Delete</button>
            </div>
          }

          <hr />
        </div>
      )}
      <form onSubmit={handleCommentSubmit}>
        <div className="field">
          <label htmlFor="name" className="">Comment</label>
          <textarea id="content" name="content" className="textarea" placeholder="Enter your comments here..." onChange={handleCommentChange} /* value={data.content || ''}*/ />
        </div>
        <button className="button is-blue">Submit</button>
      </form>
    </div>
  );
};

export default commentsShow;
