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
    <ul>
      {review && movieId &&
        review.data.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};
export default Reviews;
