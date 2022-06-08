import { Switch, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotFind from './NotFind/NotFind';
import Search from './Search/Search';
import InfoFilm from './InfoFilm/InfoFilm';
import Trending from './Trending/Trending';
import { lazy , Suspense} from 'react';
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
        <Route path="/" element={<Trending />} />
        <Route exact path="/movies" element={<Search />} />
        <Route path="/movies/:movieId/*" element={<InfoFilm />} />
        <Route path="*" element={<NotFind />} />
      </Routes>
      </Suspense>
    </div>
  );
};
