import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Page not found :(</h1>
      <Link to="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
