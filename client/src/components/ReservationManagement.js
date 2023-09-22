```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationManagement = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        const response = await axios.get('/api/reservations');
        setReservations(response.data);
    };

    const handleCancel = async (id) => {
        await axios.delete(`/api/reservations/${id}`);
        fetchReservations();
    };

    const handleModify = async (id, newReservation) => {
        await axios.put(`/api/reservations/${id}`, newReservation);
        fetchReservations();
    };

    return (
        <div id="reservationManagementForm">
            <h2>Reservation Management</h2>
            {reservations.map(reservation => (
                <div key={reservation._id}>
                    <h3>{reservation.restaurantName}</h3>
                    <p>{reservation.date}</p>
                    <p>{reservation.time}</p>
                    <p>{reservation.numberOfGuests}</p>
                    <button onClick={() => handleModify(reservation._id, reservation)}>Modify</button>
                    <button onClick={() => handleCancel(reservation._id)}>Cancel</button>
                </div>
            ))}
        </div>
    );
};

export default ReservationManagement;
```