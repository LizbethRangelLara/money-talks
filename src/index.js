import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Booking from './components/booking.js';
import Consultantposts from './components/consultantposts.js';

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
<<<<<<< HEAD
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Consultantposts" exact path="/consultantposts" component={Consultantposts}/>
          <Route name="Booking" exact path="/booking" component={Booking}/>
=======
          <Route name="Home" exact path="/" components={Home}/>
          <Route name="Consultants" exact path="/consultants" components={Consultants}/>
          <Route name="Booking" exact path="/booking" components={Booking}><Booking /> </Route>


>>>>>>> ff74858ff6976c0a8cea4656418671f77b2d93ab
        </div>
      </Router>
    )
  }
}

ReactDOM.render(

    <Routes />,

 
  document.getElementById('root')
);

