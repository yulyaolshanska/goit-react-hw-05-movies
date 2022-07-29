import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchTrandingFilms()
      .then(setMovies)
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
