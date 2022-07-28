import { Link } from 'react-router-dom';

export const GoBackButton = ({ backLinkHref }) => {
  return (
    <button type="button">
      <Link to={backLinkHref}>Go back</Link>
    </button>
  );
};
