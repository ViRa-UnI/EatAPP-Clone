```javascript
const express = require('express');
const analyticsController = require('../controllers/analyticsController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/userActivity', auth.authenticate, analyticsController.getUserActivity);
router.get('/popularRestaurants', auth.authenticate, analyticsController.getPopularRestaurants);

module.exports = router;
```