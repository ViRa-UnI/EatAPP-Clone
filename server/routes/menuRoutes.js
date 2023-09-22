```javascript
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorization');

router.route('/')
    .get(auth, authorize('customer', 'admin'), menuController.getAllMenus)
    .post(auth, authorize('restaurant'), menuController.createMenu);

router.route('/:id')
    .get(auth, authorize('customer', 'admin'), menuController.getMenu)
    .put(auth, authorize('restaurant'), menuController.updateMenu)
    .delete(auth, authorize('restaurant'), menuController.deleteMenu);

module.exports = router;
```