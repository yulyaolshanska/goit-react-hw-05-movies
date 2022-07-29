import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const getImgUrl = img => {
    return img
      ? ` https://image.tmdb.org/t/p/w500${img}`
      : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
  };

  useEffect(() => {
    async function getCast() {
      try {
        const castData = await movieAPI.getFilmCast(movieId);
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.slice(0, 15).map(item => {
            return (
              <li key={item.id}>
                <img
                  width={'100px '}
                  src={getImgUrl(item.profile_path)}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
