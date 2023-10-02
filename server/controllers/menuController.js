```javascript
const Menu = require('../models/Menu');

// Get all menus
exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a menu by id
exports.getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (menu == null) {
            return res.status(404).json({ message: 'Cannot find menu' });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new menu
exports.createMenu = async (req, res) => {
    const menu = new Menu({
        restaurantId: req.body.restaurantId,
        items: req.body.items
    });

    try {
        const newMenu = await menu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a menu
exports.updateMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (menu == null) {
            return res.status(404).json({ message: 'Cannot find menu' });
        }

        if (req.body.restaurantId != null) {
            menu.restaurantId = req.body.restaurantId;
        }
        if (req.body.items != null) {
            menu.items = req.body.items;
        }

        const updatedMenu = await menu.save();
        res.status(200).json(updatedMenu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a menu
exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (menu == null) {
            return res.status(404).json({ message: 'Cannot find menu' });
        }

        await menu.remove();
        res.status(200).json({ message: 'Deleted Menu' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```