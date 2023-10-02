```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Reservation = () => {
    const [formData, setFormData] = useState({
        restaurantId: '',
        date: '',
        time: '',
        numberOfPeople: ''
    });

    const { restaurantId, date, time, numberOfPeople } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const newReservation = {
            restaurantId,
            date,
            time,
            numberOfPeople
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newReservation);
            const res = await axios.post('/api/reservation', body, config);
            if(res.data) {
                alert('RESERVATION_SUCCESS');
            }
        } catch (err) {
            console.error(err.response.data);
        }
    }

    return (
        <div>
            <h2>Make a Reservation</h2>
            <form id="reservationForm" onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="Restaurant ID" name="restaurantId" value={restaurantId} onChange={e => onChange(e)} required />
                <input type="date" name="date" value={date} onChange={e => onChange(e)} required />
                <input type="time" name="time" value={time} onChange={e => onChange(e)} required />
                <input type="number" placeholder="Number of People" name="numberOfPeople" value={numberOfPeople} onChange={e => onChange(e)} required />
                <input type="submit" value="Book" />
            </form>
        </div>
    )
}

export default Reservation;
```