import React from 'react';
import "../css/navbar.css";

import {
  Link
} from 'react-router-dom';


class Navbar extends React.Component {
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src="../MTLogo2.png" class="img-fluid" width="100"></img>          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="consultantposts" className="nav-link">Consultants</Link>
              </li>
              <li className="nav-item">
                <Link to="booking" className="nav-link">Booking</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }

  export default Navbar;