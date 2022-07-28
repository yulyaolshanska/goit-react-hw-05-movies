import { NavLink, useLocation } from 'react-router-dom';

export const MovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </NavLink>
    </li>
  );
};
