import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/Movies/MovieDetails'));
const Reviews = lazy(() => import('./pages/Movies/Reviews'));
const Cast = lazy(() => import('./pages/Movies/Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
