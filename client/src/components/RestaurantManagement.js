```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantManagement = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const response = await axios.get('/api/restaurants');
        setRestaurants(response.data);
    };

    const approveRestaurant = async (id) => {
        await axios.put(`/api/restaurants/approve/${id}`);
        fetchRestaurants();
    };

    const editRestaurant = async (id, updatedRestaurant) => {
        await axios.put(`/api/restaurants/${id}`, updatedRestaurant);
        fetchRestaurants();
    };

    const deleteRestaurant = async (id) => {
        await axios.delete(`/api/restaurants/${id}`);
        fetchRestaurants();
    };

    return (
        <div id="restaurantManagementForm">
            <h2>Restaurant Management</h2>
            {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                    <h3>{restaurant.name}</h3>
                    <button onClick={() => approveRestaurant(restaurant._id)}>Approve</button>
                    <button onClick={() => editRestaurant(restaurant._id, restaurant)}>Edit</button>
                    <button onClick={() => deleteRestaurant(restaurant._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default RestaurantManagement;
```