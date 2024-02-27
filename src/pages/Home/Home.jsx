import React from 'react';
import { fetchFilms } from '../../helpers/api';

const Home = () => {
  fetchFilms();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
