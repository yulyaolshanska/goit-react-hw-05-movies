import { NavLink } from 'react-router-dom';

export const MovieItem = ({ title, id }) => {
  // console.log(title);
  return (
    <li>
      <NavLink to={`/movies/${id}`}>{title}</NavLink>
    </li>
  );
};
