import { MovieItem } from '../MovieItem/MovieItem';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <MovieItem key={id} id={id} title={title} />;
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
