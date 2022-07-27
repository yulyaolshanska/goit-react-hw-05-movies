import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movie.poster_path);

  useEffect(() => {
    movieAPI.fetchMovieDetails(movieId).then(data => {
      console.log(data);
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <MovieInfo
        poster={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        score={movie.vote_average}
      />
    </>
  );
};
