import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Booking from './components/booking.js';
import Consultants from './components/consultants.js';

import FirebaseContext from './components/Firebase/context';
import Firebase from 'firebase';

import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';


class Routes extends React.Component {
  render()
  {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" components={Home}/>
          <Route name="Consultants" exact path="/consultants" components={Consultants}/>
          <Route name="Booking" exact path="/booking" components={Booking}/>


        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Routes />
  </FirebaseContext.Provider>,
 
  document.getElementById('root')
);

