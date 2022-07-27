import { Routes, Route } from 'react-router-dom';

// import AppBar from './AppBar/AppBar';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
};
