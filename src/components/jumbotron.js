import React from 'react';

class Jumbotron extends React.Component{

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">Money Talks</h1>
                <p className="lead">Find your perfect Career Consultant: We off skill workshops and 1-on-1 strategy sessions.</p>
                <hr className="my-4" />
            </div>
        );
    }
}

export default Jumbotron;