
import { useState, useEffect } from 'react';
import reviewsAPI from 'services/reviewsAPI';
const Reviews = ({movieId}) => {
  const [review, setreview] = useState(null);
  useEffect(() => {
    reviewsAPI(movieId)
      .then(setreview)
      .catch(err => console.log(err));
  }, [movieId]);
  console.log("rewievs", review)
  return (
    <ul>
      {review && review.data.results.map(el => {
        return (
          <li key={el.id}>
            <p>{el.autor}</p>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
    } 
    export default Reviews