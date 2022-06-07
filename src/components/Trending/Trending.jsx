// import { NavLink } from "react-router-dom";
// import s from './navigation.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imageAPITrending from 'services/imageAPI/';
const Trending = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    imageAPITrending()
      .then(setFilms)
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {films &&
        films.data.results.map(film => (
          <li key={film.id}>
            <Link to={`/films/${film.id}`}>{film.original_title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Trending;
