```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.post('/forgotpassword', userController.forgotPassword);

router.use(auth.authenticate);

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);
router.delete('/profile', userController.deleteProfile);

module.exports = router;
```