import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router-dom";

import {logout} from '../Firebase/auth'

const topbarLogout = (
    <div>
        <Link to="/">
            <FlatButton label="Home" style={{color: '#fff'}} />

        </Link>

        <Link to="/dashboard">
            <FlatButton label="dashboard" style ={{color: 'ffff'}} />

        </Link>

        <span>
            <FlatButton
            label="Logout"
            onClick ={()=> {
                logout();
            }}
            style={{color :'ffff'}}  />

        </span>
    </div>
)

export default topbarLogout;