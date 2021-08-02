import React from 'react';
import {
  Link
} from 'react-router-dom';


class Navbar extends React.Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="consultants">Consultants</Link> | 
          <Link to="booking">Booking</Link>
        </div>
      );
    }
  }

  export default Navbar;