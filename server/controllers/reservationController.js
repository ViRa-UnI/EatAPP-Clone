```javascript
const Reservation = require('../models/Reservation');

// Create a new reservation
exports.createReservation = async (req, res) => {
    const newReservation = new Reservation(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a reservation
exports.updateReservation = async (req, res) => {
    try {
        const updatedReservation = await Reservation.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updatedReservation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await Reservation.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedReservation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a reservation
exports.getReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all reservations
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json(err);
    }
};
```