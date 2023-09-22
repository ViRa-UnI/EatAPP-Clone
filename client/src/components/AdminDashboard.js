```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserManagement from './UserManagement';
import RestaurantManagement from './RestaurantManagement';
import AdminAnalytics from './AdminAnalytics';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
        fetchUsers();
        fetchRestaurants();
        fetchAnalytics();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('/api/users');
        setUsers(response.data);
    };

    const fetchRestaurants = async () => {
        const response = await axios.get('/api/restaurants');
        setRestaurants(response.data);
    };

    const fetchAnalytics = async () => {
        const response = await axios.get('/api/analytics');
        setAnalytics(response.data);
    };

    return (
        <div id="adminDashboardForm">
            <h1>Admin Dashboard</h1>
            <UserManagement users={users} fetchUsers={fetchUsers} />
            <RestaurantManagement restaurants={restaurants} fetchRestaurants={fetchRestaurants} />
            <AdminAnalytics analytics={analytics} />
        </div>
    );
};

export default AdminDashboard;
```