import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

import { fetchFilmReviews } from 'helpers/api';
import ReviewsComponent from 'components/ReviewsComponent';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(null);
        const reviews = await fetchFilmReviews(movieId);
        setReviews(reviews);
      } catch (error) {
      } finally {
      }
    };
    getData();
  }, [movieId]);

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
