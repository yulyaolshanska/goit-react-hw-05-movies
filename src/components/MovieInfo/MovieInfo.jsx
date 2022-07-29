import styles from './MovieInfo.module.css';

export const MovieInfo = ({
  poster,

  score,
  title,
  overview,
  genres,
}) => {
  // console.log('movies', movies);
  // const { title, overview, genres } = movies;

  // console.log('genres', genres);

  // const joinGenres = genres.map(({ name }) => name);
  return (
    <>
      <div className={styles.movieBox}>
        <img src={poster} alt={title} width={'300px'}></img>

        <div className={styles.movieInfo}>
          <h1>{title}</h1>
          <p>User Score:{score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}.</p>}
        </div>
      </div>
    </>
  );
};
