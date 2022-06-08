import { Link, useParams, Routes, Route } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import BackLink from 'components/BackLink/BackLink';
import movieIdAPI from 'services/movieIdAPI/movieIdAPI';
import cardMoviesAPI from 'services/cardMoviesAPI';
import s from './MovieDetailsPage.module.css';
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    movieIdAPI(movieId)
      .then(setInfo)
      .catch(err => console.log(err));
    cardMoviesAPI(movieId)
      .then(setFilm)
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <div className={s.section_card}>
      <BackLink />
      {film && movieId && (
        <>
          <img
            className={s.section_foto}
            src={`https://image.tmdb.org/t/p/w500${film.data.backdrop_path}`}
            alt={film.data.title}
          />
          <h1>{film.data.title}</h1>
          <h2>Overview</h2>
          <p>{film.data.overview}</p>
          <h2>Genres</h2>
          <ul>
            {film.data.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
          <h2>Additional information</h2>
          <p>
            <Link to="cast">Casts</Link>
          </p>
          <p>
            <Link to="reviews">Reviews</Link>
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="cast" element={<Cast cast={info.data?.cast} />} />
              <Route path="reviews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
