```javascript
const express = require('express');
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/submit', auth.authenticate, reviewController.submitReview);
router.get('/getReviews/:restaurantId', reviewController.getReviews);
router.put('/update/:reviewId', auth.authenticate, reviewController.updateReview);
router.delete('/delete/:reviewId', auth.authenticate, reviewController.deleteReview);

module.exports = router;
```