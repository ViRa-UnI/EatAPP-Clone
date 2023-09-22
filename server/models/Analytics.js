const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    userActivity: {
        type: Map,
        of: Number,
        required: true
    },
    popularRestaurants: {
        type: Map,
        of: Number,
        required: true
    }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);

module.exports = Analytics;