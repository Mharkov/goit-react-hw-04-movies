import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '608635e1cb58cc30acc82686cca6e168';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
  language: 'en-US',
};

export const getTrending = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

export const getMovieDetales = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getMoviesCast = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getMoviesReviews = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};
