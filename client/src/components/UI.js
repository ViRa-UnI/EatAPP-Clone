```javascript
import React from 'react';
import './UI.css';

const UI = () => {
    return (
        <div id="UIForm">
            <h1>Welcome to EatApp Clone</h1>
            <p>Discover and book the best restaurants near you.</p>
            <div className="colorScheme">
                <div className="color" style={{backgroundColor: '#FF5733'}}></div>
                <div className="color" style={{backgroundColor: '#33FF57'}}></div>
                <div className="color" style={{backgroundColor: '#3357FF'}}></div>
            </div>
        </div>
    );
}

export default UI;
```

This is a simple UI component for the EatApp clone. It displays a welcome message and the color scheme of the application. The actual UI with all the functionalities will be more complex and will include other components such as SignUp, LogIn, SearchRestaurants, etc.