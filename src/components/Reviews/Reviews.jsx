import { useState, useEffect } from 'react';
import reviewsAPI from 'services/reviewsAPI';
const Reviews = ({ movieId }) => {
  const [review, setreview] = useState(null);
  useEffect(() => {
    reviewsAPI(movieId)
      .then(setreview)
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <div>
      {movieId && review?.data?.results?.length === 0 && <h2>No reviews</h2>}
      <ul>
        {review &&
          movieId &&
          review.data.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Reviews;
