import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import trendingAPI from 'services/trendingAPI';
import s from './HomePage.module.css';
const HomePage = () => {
  const location = useLocation();
  const [films, setFilms] = useState(null);

  useEffect(() => {
    trendingAPI()
      .then(setFilms)
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={s.section__trending}>
      <h2 className={s.title}>Trending today</h2>
      <ul>
        {films &&
          films.data.results.map(film => (
            <li className={s.trending__item} key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location }}
                className={s.trending__list}
              >
                {film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
