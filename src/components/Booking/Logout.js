import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";
import PropTypes from 'prop-PropTypes';
import { logout } from '../Firebase/auth'

const Logout = (
    <div>
        <Link to="/">
            <FlatButton label="Home" style={{ color: '#fff' }} />

        </Link>



        <span>
            <FlatButton
                label="Logout"
                onClick={() => {
                    logout();
                }}
                style={{ color: 'ffff' }} />

        </span>
    </div>
)

export default Logout;