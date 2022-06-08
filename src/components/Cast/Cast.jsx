import s from './cast.module.css'
const Cast = ({ cast }) => {
  console.log('Cast');
  return (
    <ul>
      {cast.map(el => {
        return (
          <li key={el.id}>
            <img className={s.foto}              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
