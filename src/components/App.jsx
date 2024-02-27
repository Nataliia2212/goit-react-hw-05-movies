import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<h2>moiv</h2>} />
      </Routes>
    </div>
  );
};

// be10d348a4d2768bca02d2487e67ca9d;
