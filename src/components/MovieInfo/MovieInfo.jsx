import styles from './MovieInfo.module.css';
import PropTypes from 'prop-types';

export const MovieInfo = ({ poster, score, title, overview, genres }) => {
  return (
    <>
      <div className={styles.movieBox}>
        <img src={poster} alt={title} width={'300px'}></img>

        <div className={styles.movieInfo}>
          <h1>{title}</h1>
          <p>User Score:{score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}.</p>}
        </div>
      </div>
    </>
  );
};

MovieInfo.propTypes = {
  poster: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.array,
};
