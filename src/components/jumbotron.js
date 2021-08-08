import React from 'react';

class Jumbotron extends React.Component{

    render(){
        return(
            <div className="jumbotron">
                <img src="../MTLogo.png" />
                <p className="lead">Find your perfect Career Consultant: We offer skill workshops and 1-on-1 strategy sessions.</p>
                <hr className="my-4" />
            </div>
        );
    }
}

export default Jumbotron;