```javascript
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'USER_ADDED', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'USER_UPDATED', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'USER_DELETED' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
        res.status(200).json({ message: 'RESTAURANT_APPROVED', restaurant });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'RESTAURANT_UPDATED', restaurant });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'RESTAURANT_DELETED' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewAnalytics = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        const restaurantCount = await Restaurant.countDocuments();
        const approvedRestaurantCount = await Restaurant.countDocuments({ approved: true });
        res.status(200).json({ message: 'ANALYTICS_VIEWED', userCount, restaurantCount, approvedRestaurantCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```