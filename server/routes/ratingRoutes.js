```javascript
const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const auth = require('../middleware/auth');

router.post('/submit', auth.authenticate, ratingController.submitRating);
router.get('/getRatings', auth.authenticate, ratingController.getRatings);
router.get('/getRating/:id', auth.authenticate, ratingController.getRating);
router.put('/updateRating/:id', auth.authenticate, ratingController.updateRating);
router.delete('/deleteRating/:id', auth.authenticate, ratingController.deleteRating);

module.exports = router;
```