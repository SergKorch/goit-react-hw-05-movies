import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { lazy, Suspense } from 'react';

const MoviesPage = lazy(()=>import ('../pages/MoviesPage/MoviesPage.jsx'))
const NotFind = lazy(()=>import ('./NotFind/NotFind.jsx'))
const MovieDetailsPage = lazy(()=>import ('../pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const HomePage = lazy(()=>import ('../pages/HomePage/HomePage.jsx'))

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />}/>
            <Route path="*" element={<NotFind />} />
        </Routes>
      </Suspense>
    </div>
  );
};
