import React from 'react';

const Rating = ({ job }) => {
  console.log(job);
  return (
    job.job.comments.map(comment =>
      <div key={comment._id}>
        {comment.rating}
      </div>
    )
  );
};


export default Rating;
