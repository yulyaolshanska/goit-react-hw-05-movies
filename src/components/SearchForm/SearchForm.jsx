import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      Notify.warning("You didn't enter anything to search");
      return;
    }

    onSubmit(searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};
