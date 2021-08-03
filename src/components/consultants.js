import React, {Component} from 'react';
import '../css/consultants.css';
import PropTypes from 'prop-types';

class Consultants extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

Consultants.defaultProps = {
    title: "Bill Gates",
    body: "Industry: Software & Entrepreneurship \n Years Experience: 46 Years \n",
};

Consultants.propTypes = {
    title: PropTypes.string
};
export default Consultants;