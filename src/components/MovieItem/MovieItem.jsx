import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieItem.module.css';
import PropTypes from 'prop-types';

export const MovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li className={styles.movieItem}>
      <NavLink
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </NavLink>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
