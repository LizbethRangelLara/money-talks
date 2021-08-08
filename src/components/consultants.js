import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../css/consultants.css"
import {
  Link
} from 'react-router-dom';


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
    
      imageElement = <img src= {this.props.image} />;
      nameElement = <h3>{this.props.name}</h3>;
      industryElement = <p><strong>Industry: </strong>{this.props.industry}</p>;
      experienceElement = <p><strong>Experience: </strong>{this.props.experience}</p>;
      linkedinElement = <p><strong>LinkedIn:  </strong><a href={this.props.linkedin}>{this.props.linkedin}</a></p>;
      aboutElement = <p>{this.props.about}</p>;
      buttonArea = (
        <div>
          <button id="bookConsultant" className="btn btn-danger" onClick={event => window.location.href='/booking'}>Book</button>
        </div>
      )

    return (
      <div className="col-sm-3">
        <div class="card" style={{width: "100%"}}>
          <div className="card card-view">
            <div class="card-img-top text-center">
              {imageElement}
            </div>
            <div className="card-body">
              <div className="consultantname">
              {nameElement}
              </div>
              <div>
              {industryElement}
              </div>
              {experienceElement}
              {linkedinElement}
              <strong>About:</strong>{aboutElement}
              {buttonArea}
            </div>
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