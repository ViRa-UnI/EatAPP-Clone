```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await axios.get('/api/restaurant');
            setRestaurant(res.data);
        };
        fetchRestaurant();
    }, []);

    const updateRestaurantProfile = async () => {
        const res = await axios.put('/api/restaurant', restaurant);
        if (res.data.success) {
            alert('PROFILE_UPDATED');
        }
    };

    const handleInputChange = (event) => {
        setRestaurant({
            ...restaurant,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div id="restaurantProfileForm">
            <h2>Restaurant Profile</h2>
            <form onSubmit={updateRestaurantProfile}>
                <label>
                    Name:
                    <input type="text" name="name" value={restaurant.name} onChange={handleInputChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={restaurant.location} onChange={handleInputChange} />
                </label>
                <label>
                    Cuisine:
                    <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleInputChange} />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default RestaurantProfile;
```