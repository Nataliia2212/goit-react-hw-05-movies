import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchFilms = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    },
  });
  return data.results;
};

export const fetchFilmById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    },
  });
  return data;
};

export const fetchFilmCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    },
  });
  return data.cast;
};

export const fetchFilmReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    },
  });
  return data.results;
};

export const fetchFilmQuery = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`, {
    params: {
      api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    },
  });
  return data.results;
};
