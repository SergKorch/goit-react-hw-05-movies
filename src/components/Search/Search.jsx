import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import s from './searchform.module.css';
import searchAPI from 'services/searchAPI';
// import userEvent from "@testing-library/user-event";
const Search = () => {
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
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else console.log('Введите поиск корректно');
  }, [query]);

  return (
    <div>
      <Link to="/" state={{ from: location }}>
        to Main
      </Link>
      <form
        onSubmit={handleSubmit}
        // className={s.SearchForm}
      >
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button__label}>Search</span>
        </button>
        <input
          // className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
          // value={imageName}
          // onChange={handleNameChange}
        />
      </form>
    </div>
  );
};

export default Search;
