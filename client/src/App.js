```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import SearchRestaurants from './components/SearchRestaurants';
import Reservation from './components/Reservation';
import Reviews from './components/Reviews';
import Ratings from './components/Ratings';
import RestaurantProfile from './components/RestaurantProfile';
import ReservationManagement from './components/ReservationManagement';
import MenuManagement from './components/MenuManagement';
import Analytics from './components/Analytics';
import AdminDashboard from './components/AdminDashboard';
import UserManagement from './components/UserManagement';
import RestaurantManagement from './components/RestaurantManagement';
import AdminAnalytics from './components/AdminAnalytics';
import UI from './components/UI';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/search-restaurants" component={SearchRestaurants} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/ratings" component={Ratings} />
        <Route path="/restaurant-profile" component={RestaurantProfile} />
        <Route path="/reservation-management" component={ReservationManagement} />
        <Route path="/menu-management" component={MenuManagement} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/user-management" component={UserManagement} />
        <Route path="/restaurant-management" component={RestaurantManagement} />
        <Route path="/admin-analytics" component={AdminAnalytics} />
        <Route path="/ui" component={UI} />
      </Switch>
    </Router>
  );
}

export default App;
```