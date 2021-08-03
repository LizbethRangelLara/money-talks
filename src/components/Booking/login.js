import React, {Component} from 'react';

import {login, resetPassword} from '../Firebase/auth';

import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

function setErrorMsg(error){

    return {
        loginMessage : error
    };
}

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            loginMessage : null,
        };
    }


    handleSubmit = e => {
        e.preventDefault();
        login(this.state.email, this.state.password).catch(error => {
            this.setState(setErrorMsg('Invalid username/password.'));
        });
    };

    resetPassword = e =>{
        e.preventDefault();
        resetPassword(this.state.email)
        .then(()=> 
        this.setState(
            setErrorMsg(`Password reset email sent to ${this.state.email}.`)
        ))
        .catch(error => this.setState(setErrorMsg(`Email address not found`)));
    };


    render (){

        return (
            <form 
            onSubmit={e=> this.handleSubmit(e)}
            >
                    <h3>Login</h3>
                    <TextField
                    hintText="Enter your Email"
                    floatingLabelText = "Email"
                    onChange={(e, newValue => this.setState({email: newValue}))}

                    />

                    <br />

                    <TextField
                    type="password"
                    hintText="Enter your password"
                    floatingLabelText = "Password"
                    onChange={(e, newValue)=> this.setState({password : newValue})}

                    />

                    <br />
                    {this.state.loginMessage && (
                        <div className="alert alert-danger" role="alert">
                            <span 
                            className="glyphicon glyphicon-exclamation-sign"
                            aria-hidden="true"
                            />

                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.loginMessage}{' '}
                            <a href='' onClick={this.resetPassword} className="alert-link">
                                Forgot Password
                            </a>
                        </div>
                    )
                    }

                    <RaisedButton
                    label="login"
                    primary={true}
                    style={style.raisedBtn}
                    type="submit"
                    />

            </form>


        );
    }
}

const raisedBtn = {
    nmargin: 15
}

const container = {
    textAlign: 'cnter'
};

const style = {
    raisedBtn,
    container
};