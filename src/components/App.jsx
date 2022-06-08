import { Switch, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotFind from './NotFind/NotFind';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import HomePage from './HomePage/HomePage';
import { lazy, Suspense } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// const Navigation = lazy(()=>import ('./Navigation/Navigation'))
// const Trending = lazy(()=>import ('./Trending/Trending'))
// const NotFind = lazy(()=>import ('./NotFind/NotFind'))
// const InfoFilm = lazy(()=>import ('./InfoFilm/InfoFilm'))
// const Search = lazy(()=>import ('./Search/Search'))

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />}/>
            <Route path="*" element={<NotFind />} />
        </Routes>
      </Suspense>
    </div>
  );
};
