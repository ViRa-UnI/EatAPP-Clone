```javascript
import React, { useState } from 'react';
import axios from 'axios';

const MenuManagement = () => {
    const [menu, setMenu] = useState({});

    const handleInputChange = (event) => {
        setMenu({
            ...menu,
            [event.target.name]: event.target.value
        });
    };

    const submitMenu = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/menu', menu);
            if(response.data.success) {
                alert('Menu updated successfully');
            } else {
                alert('Failed to update menu');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating menu');
        }
    };

    return (
        <div>
            <form id="menuManagementForm" onSubmit={submitMenu}>
                <h2>Menu Management</h2>
                <label>
                    Dish Name:
                    <input type="text" name="dishName" onChange={handleInputChange} />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" onChange={handleInputChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" onChange={handleInputChange} />
                </label>
                <button type="submit">Update Menu</button>
            </form>
        </div>
    );
};

export default MenuManagement;
```