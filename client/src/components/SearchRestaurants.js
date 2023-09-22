```javascript
import React, { useState } from 'react';
import axios from 'axios';

const SearchRestaurants = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/api/restaurants/search/${searchTerm}`);
            setRestaurants(response.data);
        } catch (error) {
            console.error('Error searching for restaurants', error);
        }
    };

    return (
        <div>
            <form id="searchRestaurantsForm" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {restaurants.map((restaurant) => (
                <div key={restaurant._id}>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchRestaurants;
```