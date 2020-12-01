import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const StarRating = ({ outfit }) => {

  const [review, setReview] = useState({});

  // componentDidMount rendering product info
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${outfit}/list`)
      .then(res => setReview(res.data))
      .catch(err => console.log(err))
  }, []);

  let starReview;
  if (review.results) {
    let sum = 0;
    for (let i = 0; i < review.results.length; i++) {
      sum += review.results[i].rating
    }
    starReview = sum / review.results.length
  }

  // Default to 5 star ratings if no ratings
  return (
    <div>
      {starReview > 0 &&
        <StarRatings
          rating={starReview}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        />}
    </div>
  );
}

export default StarRating;