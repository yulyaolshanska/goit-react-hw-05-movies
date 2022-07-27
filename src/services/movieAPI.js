import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '5bad2d5f9d55e6c30d24d3c221da8172';

export async function fetchTrandingFilms() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchSearchingFilms(searchQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}language=en-US?`
  );
  return response;
}

export async function fetchMovieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US?`
  );
  return response;
}

export async function getFilmReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US?`
  );
  return response;
}

export async function getFilmCast(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US?`
  );
  return response;
}
