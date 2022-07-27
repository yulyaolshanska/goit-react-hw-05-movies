import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Movies = () => {
  return (
    <>
      <SearchForm />
      <MovieList />
    </>
  );
};
