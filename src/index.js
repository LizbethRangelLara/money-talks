import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Booking from './components/booking.js';
import Consultants from './components/consultants.js';

import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';


class Routes extends React.Component {
  render()
  {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Consultants" exact path="/consultants" component={Consultants}/>
          <Route name="Booking" exact path="/booking" component={Booking}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

