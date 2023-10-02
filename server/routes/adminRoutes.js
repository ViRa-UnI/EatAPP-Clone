```javascript
const express = require('express');
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

const router = express.Router();

// User Management Routes
router.post('/addUser', auth.authenticate, auth.authorize('admin'), adminController.addUser);
router.put('/editUser/:id', auth.authenticate, auth.authorize('admin'), adminController.editUser);
router.delete('/deleteUser/:id', auth.authenticate, auth.authorize('admin'), adminController.deleteUser);

// Restaurant Management Routes
router.post('/approveRestaurant', auth.authenticate, auth.authorize('admin'), adminController.approveRestaurant);
router.put('/editRestaurant/:id', auth.authenticate, auth.authorize('admin'), adminController.editRestaurant);
router.delete('/deleteRestaurant/:id', auth.authenticate, auth.authorize('admin'), adminController.deleteRestaurant);

// Analytics Routes
router.get('/analytics', auth.authenticate, auth.authorize('admin'), adminController.viewAnalytics);

module.exports = router;
```