import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
// import Addititonal from 'pages/Addititonal/Addititonal';

const Layout = lazy(() => import('./Layout/Layout'));
const Movies = lazy(() =>
  import('../pages/Movies/Movies' /*webpackChunkName: "Movies" */)
);
const Home = lazy(() =>
  import('pages/Home/Home' /*webpackChunkName: "Home" */)
);
const MovieDetails = lazy(() =>
  import(
    'pages/MovieDetails/MovieDetails' /*webpackChunkName: "MovieDetails" */
  )
);
const Cast = lazy(() => import('./Cast/Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /*webpackChunkName: "Reviews" */)
);
const NotFound = lazy(() =>
  import('./NotFound/NotFound' /*webpackChunkName: "NotFound" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
