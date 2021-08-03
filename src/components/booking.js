import React from 'react';

import {Link} from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';
import login from '../components/Booking/login';
import logout from '../components/Booking/Logout';
import { SignUpForm } from './Booking/SignUp';
import { Component } from 'react/cjs/react.production.min';

class TopbarButtons extends Component{
  render(){

  return (
  <div>
    <div>
      <h2>Welcome to the booking services!</h2>
      <p>You can book a service with us by signing up in our signUp page!</p>
      <p>If you are a returning client, Please Login and reschedule a session!</p>
    </div>
    <Link to="/login">
      <FlatButton label="login" style={{color: '#fff'}} />

    </Link>

    <Link to="/logout">
      <FlatButton label="logout" style={{color: '#fff'} } />
    </Link>

    <span>
        

      <Link to="/signup">
        <FlatButton label="Sign Up" style={{color : '#fff'}} />
      </Link>
    </span>
  </div>
  )
};
}


export default TopbarButtons;