import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './Movies.module.css';

const Movies = () => {
  // const [query, setQuery] = useState('');
  const [inputhQuery, setInputhQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log('query', query);
  useEffect(() => {
    if (query === '') {
      return;
    }

    movieAPI
      .fetchSearchingFilms(query)
      .then(data => setSearchMovies(data))
      .catch(console.log);
  }, [query]);

  // const getFormData = data => {
  //   setQuery(data);
  // };

  ///

  const handleSubmit = e => {
    e.preventDefault();
    if (inputhQuery === '') {
      Notify.warning("You didn't enter anything to search");
      return;
    }
    setSearchParams({ query: inputhQuery });
    // onSubmit(searchQuery);
  };

  const handleChange = e => {
    setInputhQuery(e.target.value.toLowerCase().trim());
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="query"
          onChange={handleChange}
          placeholder="Enter movie name"
          className={styles.input}
        />

        <button type="submit" className={styles.formBtn}>
          Search
        </button>
      </form>
      {/* <SearchForm onSubmit={getFormData} /> */}
      {searchMovies.length > 0 && query && <MovieList movies={searchMovies} />}
      {inputhQuery !== '' && searchMovies.length === 0 && (
        <p>
          Sorry, there are no movies matching your search query. Please try
          again.
        </p>
      )}
    </div>
  );
};

export default Movies;
