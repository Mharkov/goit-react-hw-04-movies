import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '608635e1cb58cc30acc82686cca6e168';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
  language: 'en-US',
};

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { query },
    });

    return data;
  } catch (error) {
    console.log('erroe', { error });
  }
};

export const getTrending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data;
  } catch (error) {
    console.log('erroe', { error });
  }
};

export const getMovieDetales = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log('erroe', { error });
  }
};

export const getMoviesCast = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data;
  } catch (error) {
    console.log('erroe', { error });
  }
};

export const getMoviesReviews = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data;
  } catch (error) {
    console.log('erroe', { error });
  }
};
