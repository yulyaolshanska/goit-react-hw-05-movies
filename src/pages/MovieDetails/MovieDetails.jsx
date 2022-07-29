import { GoBackButton } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  // const location = useLocation();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // console.log('movieId', movieId);

  const imgUrl = movie.poster_path
    ? ` https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  const voteAverage = Math.round(movie.vote_average * 10);
  // const joinGenres = movie.genres.map(genre => genre.name);

  useEffect(() => {
    movieAPI
      .fetchMovieDetails(movieId)
      .then(data => {
        // console.log('data', data);
        setMovie(data);
      })
      .catch(console.log());
  }, [movieId]);

  // console.log(movie);
  return (
    <div className={styles.movieInfoContainer}>
      <GoBackButton backLinkHref={backLinkHref} />
      <MovieInfo
        poster={imgUrl}
        // movies={movie}
        title={movie.title}
        overview={movie.overview}
        score={voteAverage}
        genres={movie.genres}
      />
      <h4>Addititonal information</h4>
      <NavLink
        // className={styles.link}
        to="cast"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Cast
      </NavLink>
      <NavLink
        // className={styles.link}
        to="reviews"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Reviews
      </NavLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
