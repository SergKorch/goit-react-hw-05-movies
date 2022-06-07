import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import movieId from 'services/movieId/';
const InfoFilm = () => {
  const { filmId } = useParams();
  const [ film, setFilm ] = useState(null);
  useEffect(() => {
    movieId(filmId)
      .then(setFilm)
      .catch(err => console.log(err));
  }, [filmId, setFilm]);
  console.log(film);
  return (
    <div>
    <img src="" alt="" />
      <h1>{`Film ${filmId}`}</h1>
      <Link to={`/films/${filmId}/cast`}>Casts</Link>
      <Link to={`/films/${filmId}/reviews`}>Reviews</Link>
    </div>
    // {film && }
  );
};

export default InfoFilm;
