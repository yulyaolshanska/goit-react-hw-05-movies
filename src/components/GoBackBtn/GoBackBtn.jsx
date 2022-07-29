import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GoBackButton = ({ backLinkHref }) => {
  return (
    <button type="button">
      <Link to={backLinkHref}>Go back</Link>
    </button>
  );
};

GoBackButton.propType = {
  backLinkHref: PropTypes.string,
};
