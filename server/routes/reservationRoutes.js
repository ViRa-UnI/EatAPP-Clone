```javascript
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const auth = require('../middleware/auth');

router.post('/book', auth.authenticate, reservationController.bookReservation);
router.put('/modify/:id', auth.authenticate, reservationController.modifyReservation);
router.delete('/cancel/:id', auth.authenticate, reservationController.cancelReservation);

module.exports = router;
```