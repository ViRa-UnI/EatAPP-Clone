```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const response = await axios.get('/api/analytics');
            setAnalyticsData(response.data);
        } catch (error) {
            console.error('Error fetching analytics data', error);
        }
    };

    return (
        <div id="analyticsForm">
            <h2>Analytics</h2>
            <table>
                <thead>
                    <tr>
                        <th>User Activity</th>
                        <th>Popular Restaurants</th>
                    </tr>
                </thead>
                <tbody>
                    {analyticsData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.userActivity}</td>
                            <td>{data.popularRestaurants}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Analytics;
```