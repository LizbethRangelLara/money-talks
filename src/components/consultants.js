import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consultantposts from './consultantposts';
import "../css/consultants.css"


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
    
      imageElement = < img src= {this.props.image} width="300px" height="300px"></img>;
      nameElement = <h3 style={{color: 'black'}}> <strong>{this.props.name} </strong></h3>;
      industryElement = <p style={{color: 'black'}}>{this.props.industry}</p>
      experienceElement = <p style={{color: 'black'}}>{this.props.experience}</p>
      linkedinElement = <p style={{color: 'black'}}>{this.props.linkedin}</p>
      aboutElement = <p style={{color: 'black'}}>{this.props.about}</p>;
      buttonArea = (
        <div>
          <button id="bookConsultant" className="btn btn-danger" onClick={event => window.location.href='/booking'}>Book</button>
        </div>
      )

    return (
      <div className="col-sm-3">
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