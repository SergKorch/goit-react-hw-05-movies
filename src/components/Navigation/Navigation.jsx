import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.sectionNav}>
      <NavLink
        to="/"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
