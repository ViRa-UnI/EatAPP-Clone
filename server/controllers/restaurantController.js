```javascript
const Restaurant = require('../models/Restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single restaurant
exports.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (restaurant == null) {
            return res.status(404).json({ message: 'Cannot find restaurant' });
        }
        res.restaurant = restaurant;
        res.status(200).json(res.restaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        location: req.body.location,
        cuisine: req.body.cuisine,
        menu: req.body.menu
    });
    try {
        const newRestaurant = await restaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Restaurant deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```