```javascript
const Rating = require('../models/Rating');

// Submit a rating
exports.submitRating = async (req, res) => {
    const { userId, restaurantId, rating } = req.body;

    try {
        const newRating = new Rating({
            user: userId,
            restaurant: restaurantId,
            rating
        });

        await newRating.save();

        res.status(200).json({ message: 'RATING_SUBMITTED', rating: newRating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get ratings for a restaurant
exports.getRatings = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const ratings = await Rating.find({ restaurant: restaurantId });

        res.status(200).json({ ratings });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a rating
exports.updateRating = async (req, res) => {
    const { ratingId } = req.params;
    const { rating } = req.body;

    try {
        const updatedRating = await Rating.findByIdAndUpdate(ratingId, { rating }, { new: true });

        res.status(200).json({ message: 'RATING_UPDATED', rating: updatedRating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a rating
exports.deleteRating = async (req, res) => {
    const { ratingId } = req.params;

    try {
        await Rating.findByIdAndDelete(ratingId);

        res.status(200).json({ message: 'RATING_DELETED' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```