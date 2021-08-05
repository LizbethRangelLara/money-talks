import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consultantposts from './consultantposts';


class Consultant extends Component {

  constructor(properties) {
    super(properties);
  }

  handleBook(event)
  {
      this.props.bookHandler(this.props.id);
  }

  render() {
    let imageElement, nameElement, industryElement, experienceElement, linkedinElement, aboutElement, buttonArea;
    
      imageElement = < img src= {this.props.image}></img>;
      nameElement = <h5> {this.props.name} </h5>;
      industryElement = <p>{this.props.industry}</p>
      experienceElement = <p>{this.props.experience}</p>
      linkedinElement = <p>{this.props.linkedin}</p>
      aboutElement = <p>{this.props.about}</p>;
      buttonArea = (
        <div>
          <button id="bookConsultant" className="btn btn-danger" onClick="/booking">Book</button>
        </div>
      )

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {imageElement}
            {nameElement}
            {industryElement}
            {experienceElement}
            {linkedinElement}
            {aboutElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}

Consultant.defaultProps = {
    title: "A cool title",
    body: "A cool body",
};

Consultant.propTypes = {
    title: PropTypes.string
};
export default Consultant;