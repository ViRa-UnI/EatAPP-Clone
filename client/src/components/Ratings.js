```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Ratings = () => {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');

    const submitRating = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/ratings', { rating });

            if (response.data.success) {
                setMessage('RATING_SUBMITTED');
                setRating(0);
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('An error occurred while submitting your rating.');
        }
    };

    return (
        <div>
            <form id="ratingForm" onSubmit={submitRating}>
                <label htmlFor="rating">Rate the Restaurant:</label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <button type="submit">Submit Rating</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Ratings;
```