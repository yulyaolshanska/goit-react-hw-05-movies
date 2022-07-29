import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchTrandingFilms()
      .then(setMovies)
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
