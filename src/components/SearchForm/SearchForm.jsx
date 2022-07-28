// import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useSearchParams } from 'react-router-dom';

// export const SearchForm = ({ onSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

//   const handleSubmit = e => {
//     if (query === '') {
//       return;
//     }
//     e.preventDefault();
//     if (searchQuery === '') {
//       Notify.warning("You didn't enter anything to search");
//       return;
//     }
//     setSearchParams({ query: searchQuery });
//     onSubmit(searchQuery);
//   };

//   const handleChange = e => {
//     setSearchQuery(e.target.value.toLowerCase().trim());
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={handleChange}></input>
//       <button type="submit">Search</button>
//     </form>
//   );
// };
