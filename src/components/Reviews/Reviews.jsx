import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI
      .getFilmReviews(movieId)
      .then(data => setReviews(data))
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.slice(0, 10).map(({ id, content, author }) => {
            return (
              <li key={id}>
                <p>Author:{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
