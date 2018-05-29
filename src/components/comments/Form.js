import React from 'react';

const commentsForm = ({ handleCommentChange, handleCommentSubmit }) => {
  return (
    <form onSubmit={handleCommentSubmit}>
      <div className="field">
        <label htmlFor="name" className="">Comment</label>
        <textarea id="content" name="content" className="textarea" placeholder="Enter your comments here..." onChange={handleCommentChange} /* value={data.content || ''}*/ />
      </div>
      {/* <div className="field"> */}
      {/* <label htmlFor="rating">Rating</label> */}
      {/* <div className="control">
          <div className="select">
            <select id="rating" name="rating" onChange={handleCommentChange} value={data.rating || ''}>
              <option className="disabled">Please select</option>
              <option value="1">🇻🇳</option>
              <option value="2">🈲🈲</option>
              <option value="3">🏀🏀🏀</option>
              <option value="4">🏬🏬🏬🏬</option>
              <option value="5">🕋🕋🕋🕋🕋</option>
            </select>
          </div>
        </div> */}
      {/* </div> */}
      <button className="button is-blue">Submit</button>
    </form>
  );
};

export default commentsForm;
