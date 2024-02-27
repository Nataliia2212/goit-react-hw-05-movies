import axios from 'axios';

// axios.defaults.baseURL =
//   'https://api.themoviedb.org/21037204/trending/movie/day';

export const fetchFilms = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/21037204/trending/movie/day?language=en-US'
    // params: {
    //   header: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTEwZDM0OGE0ZDI3NjhiY2EwMmQyNDg3ZTY3Y2E5ZCIsInN1YiI6IjY1ZGUxYjQ2NzE5YWViMDE2MmU3OGMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cR4O-8r_avZUgK9aDkR0IVOnSNEuPgg6pOmvG3Z8UaY',
    //   },
    //   time_window: 'day',
    //   api_key: 'be10d348a4d2768bca02d2487e67ca9d',
    //   Authorization: 'Bearer be10d348a4d2768bca02d2487e67ca9d',
    //   account_id: 21037204,
    // },
  );
  return data;
};
