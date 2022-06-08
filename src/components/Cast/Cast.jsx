import s from './cast.module.css';
const Cast = ({ cast }) => {
  return (
    <ul className={s.section__casts}>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id} className={s.cast__card}>
              <img
                className={s.foto}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
