import s from './cast.module.css';
import { useEffect, useState } from 'react';
import movieIdAPI from 'services/movieIdAPI';
import PropTypes from 'prop-types';
const Cast = ({ movieId }) => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    movieIdAPI(movieId)
      .then(setInfo)
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      {info && info?.data?.cast?.length === 0 && (
        <h2>No information about actors</h2>
      )}
      <ul className={s.section__casts}>
        {info &&
          info.data.cast.map(({ id, profile_path, name, character }) => {
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
    </>
  );
};
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
