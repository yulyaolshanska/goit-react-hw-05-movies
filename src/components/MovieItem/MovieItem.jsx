import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieItem.module.css';
import PropTypes from 'prop-types';

export const MovieItem = ({ title, id, poster, release, rating }) => {
  const location = useLocation();
  const imgUrl = poster
    ? ` https://image.tmdb.org/t/p/w300${poster}`
    : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  const releaseYear = release.slice(0, 4);
  const movieRating = rating.toFixed(1);

  return (
    <li className={styles.movieItem}>
      <NavLink
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img src={imgUrl} alt={title} />
        <div className={styles.movieInfo}>
          <h2>{title}</h2>
          <p>{releaseYear}</p>
          <p>{movieRating}</p>
        </div>
      </NavLink>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
