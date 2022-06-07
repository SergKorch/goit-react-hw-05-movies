import { Route, Link } from "react-router-dom";
import s from './searchform.module.css'
import imageAPITrending from "services/imageAPI/";
const Search = () => {
    // imageAPITrending().then(res => console.log(res)).catch(err=>console.log(err))
    return (
        <form
        //  onSubmit={handleSubmit} 
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
            // value={imageName}
            // onChange={handleNameChange}
          />
        </form>
    );
  };



export default Search