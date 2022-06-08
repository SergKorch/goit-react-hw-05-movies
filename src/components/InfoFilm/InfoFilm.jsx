import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BackLink from 'components/BackLink/BackLink';
import movieIdAPI from 'services/movieIdAPI/movieIdAPI';
const InfoFilm = () => {
  const { movieId } = useParams();
  const [ film, setFilm ] = useState(null);
  console.log("useParams()=", useParams())
  useEffect(() => {
    movieIdAPI(movieId)
      .then(setFilm)
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
    <img src="" alt="" />
      <h1>{`Film ${movieId}`}</h1>
      <BackLink/>

          {/* <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p> */}
      <Link to={`/movies/${movieId}/cast`}>Casts</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

    </div>
    // {film && }
  );
};

export default InfoFilm;
