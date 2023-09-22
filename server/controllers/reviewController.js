```javascript
const Review = require('../models/Review');

// Submit a review
exports.submitReview = async (req, res) => {
    const { restaurantId, userId, reviewText, rating } = req.body;

    try {
        const review = new Review({
            restaurant: restaurantId,
            user: userId,
            reviewText,
            rating
        });

        await review.save();

        res.status(200).json({ message: 'REVIEW_SUBMITTED', review });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while submitting the review.' });
    }
};

// Get all reviews for a restaurant
exports.getRestaurantReviews = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const reviews = await Review.find({ restaurant: restaurantId }).populate('user', 'name');

        res.status(200).json({ reviews });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the reviews.' });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    const { reviewId } = req.params;

    try {
        await Review.findByIdAndDelete(reviewId);

        res.status(200).json({ message: 'Review deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the review.' });
    }
};
```