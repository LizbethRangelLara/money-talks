import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/auth';
import RaisedButton from 'material-ui/RaisedButton';


import TextField from 'material-ui/TextField';
function setErrorMsg(error) {
    return {
        registerError: error.message
    };
}



const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",

    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = event => {

        event.preventDefault();
        auth(this.state.email, this.state.password).catch(event =>
            this.setState(setErrorMsg(event)));

    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        
        return (
            <form handleSubmit={this.handleSubmit} style={style.container}>
                <h3>Book Services</h3>
                <TextField
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    onChange={this.onChange}

                />
                <br />

                <TextField
                    hintText="Enter your password"
                    floatingLabelText="Password"
                    onChange={this.onChange}
                    type="password"

                />

                <br />
                {this.state.error && (
                    <div className="alert alert-danger" role="alert">
                        <span
                            className="glyphicon glyphicon-exclamation-sign"
                            aria-hidden="true"

                        />
                        <span className="sr-only">Error:</span>
                        &nbsp;{this.state.error}
                    </div>
                )}

                <RaisedButton
                    label="SignUp"
                    primary={true}
                    style={style.raisedBtn}
                    type="submit"


                />

            </form>
        );
    }
}


const raisedBtn = {
    margin: 15
}


const container = {
    textAlign: 'center'
};

const style = {
    raisedBtn,
    container
}


export default SignUpForm;