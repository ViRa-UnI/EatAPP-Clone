```javascript
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  menu: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  reservations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation'
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }]
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
```