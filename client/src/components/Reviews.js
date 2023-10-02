```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('/api/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    return (
        <div id="reviewForm">
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review._id}>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                    <p>Rating: {review.rating}</p>
                    <p>By: {review.user}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
```