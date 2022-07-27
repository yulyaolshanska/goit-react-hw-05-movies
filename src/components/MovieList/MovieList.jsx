import { MovieItem } from '../MovieItem/MovieItem';

export const MovieList = ({ movies }) => {
  // console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <MovieItem key={id} id={id} title={title} />;
      })}
    </ul>
  );
};
