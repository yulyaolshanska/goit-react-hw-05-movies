import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    movieAPI
      .fetchSearchingFilms(query)
      .then(setSearchMovies)
      .catch(console.log);
  }, [query, searchMovies]);

  const getFormData = data => {
    setQuery(data);
  };

  return (
    <>
      <SearchForm onSubmit={getFormData} />
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
      {query !== '' && searchMovies.length === 0 && (
        <p>
          Sorry, there are no movies matching your search query. Please try
          again.
        </p>
      )}
    </>
  );
};
