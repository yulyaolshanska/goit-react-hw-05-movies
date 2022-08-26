import { MovieItem } from '../MovieItem/MovieItem';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  // console.log('movies', movies);
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title, poster_path, release_date, vote_average }) => {
        // console.log(poster_path);
        // console.log(release_date);
        // console.log(vote_average);

        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            poster={poster_path}
            release={release_date}
            rating={vote_average}
          />
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};
