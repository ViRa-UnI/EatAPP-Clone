```javascript
const bcrypt = require('bcryptjs');

const encryptData = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedData = await bcrypt.hash(data, salt);
    return encryptedData;
};

module.exports = encryptData;
```