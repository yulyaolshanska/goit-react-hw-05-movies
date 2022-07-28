import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  console.log('movieId', movieId);
  const imgUrl = movie.poster_path
    ? ` https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  const voteAverage = Math.round(movie.vote_average * 10);
  useEffect(() => {
    movieAPI
      .fetchMovieDetails(movieId)
      .then(data => {
        console.log('data', data);
        setMovie(data);
      })
      .catch(console.log());
  }, [movieId]);

  console.log(movie);
  return (
    <>
      <MovieInfo
        poster={imgUrl}
        title={movie.title}
        overview={movie.overview}
        score={voteAverage}
        genres={movie.genres}
      />
      <h4>Addititonal information</h4>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
};
