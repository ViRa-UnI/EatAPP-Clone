```javascript
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorization');

router.route('/')
    .get(restaurantController.getAllRestaurants)
    .post(auth, authorize('admin'), restaurantController.createRestaurant);

router.route('/:id')
    .get(restaurantController.getRestaurant)
    .put(auth, authorize('admin'), restaurantController.updateRestaurant)
    .delete(auth, authorize('admin'), restaurantController.deleteRestaurant);

module.exports = router;
```