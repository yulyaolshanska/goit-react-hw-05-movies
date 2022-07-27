import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
