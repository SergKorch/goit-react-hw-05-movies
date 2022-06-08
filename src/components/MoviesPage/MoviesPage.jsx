import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './MoviesPage.module.css';
import searchAPI from 'services/searchAPI';

const MoviesPage = () => {
  const [films, setFilms] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  useEffect(() => {
    if (query) {
      searchAPI(query)
        .then(setFilms)
        .catch(err => console.log(err));
    } else console.log('Введите поиск корректно');
  }, [query]);

  return (
    <div className={s.SearchForm}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
        />
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button__label}>Search</span>
        </button>
      </form>
      {films && (
        <div className={s.section__search}>
          {films && <h2 className={s.title}>Search results</h2>}
          <ul>
            {films.data.results.map(({ id, original_title }) => (
              <li className={s.search__item} key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={s.trending__list}
                >
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
