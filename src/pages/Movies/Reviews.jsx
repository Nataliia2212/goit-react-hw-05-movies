import React from 'react';
import { useParams } from 'react-router-dom';

import ReviewsComponent from 'components/ReviewsComponent';

import { fetchFilmReviews } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews] = useHttp(fetchFilmReviews, movieId);

  if (!reviews) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {reviews.length ? (
        <ReviewsComponent reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
