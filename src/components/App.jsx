import { Switch, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotFind from './NotFind/NotFind';
import Search from './Search/Search';
import InfoFilm from './InfoFilm/InfoFilm';
import Trending from './Trending/Trending';
export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Trending />} />
        <Route exact path="/films" element={<Search />} />
        <Route path="/films/:filmId/*" element={<InfoFilm />} />
        <Route path="*" element={<NotFind />} />
      </Routes>
    </div>
  );
};
