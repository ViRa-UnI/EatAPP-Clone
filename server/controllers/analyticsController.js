```javascript
const Analytics = require('../models/Analytics');

// Get analytics data
exports.getAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.find();
        res.status(200).json({ success: true, data: analytics });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get analytics data by restaurant
exports.getAnalyticsByRestaurant = async (req, res) => {
    try {
        const analytics = await Analytics.find({ restaurantId: req.params.restaurantId });
        res.status(200).json({ success: true, data: analytics });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update analytics data
exports.updateAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: analytics });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete analytics data
exports.deleteAnalytics = async (req, res) => {
    try {
        await Analytics.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Analytics data deleted successfully.' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
```