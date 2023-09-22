```javascript
const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            image: {
                type: String
            }
        }
    ]
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
```