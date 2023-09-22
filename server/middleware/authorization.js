```javascript
const User = require('../models/User');

// Middleware for role-based access control
const authorize = (roles = []) => {
    // roles param can be a single role string (e.g., 'Admin') 
    // or an array of roles (e.g., ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return async (req, res, next) => {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (roles.length && !roles.includes(user.role)) {
            // user's role is not authorized
            return res.status(401).json({ message: 'Unauthorized' }); 
        }

        // authentication and authorization successful
        next();
    }
}

module.exports = authorize;
```