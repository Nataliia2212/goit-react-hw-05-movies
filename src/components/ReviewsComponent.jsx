import React from 'react';

const ReviewsComponent = ({ reviews }) => {
  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p> <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsComponent;
