import React from 'react';
import "../css/home.css";

class Home extends React.Component {
    render()
    {
      return (
  /*      <div>
          <h1>Money Talks</h1>
          <p>Find your perfect Career Consultant: We offer skill workshops and 1-on-1 strategy sessions. 
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
          </p>
        </div>
        */
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Money Talks</h1>
          <p className="lead">Find your perfect Career Consultant: We off skill workshops and 1-on-1 strategy sessions.</p>
          <hr className="my-4" />
        </div>
        <div>
          <p>Finding your perfect consultant has never been easier.  Browse our list of top quality career consultants to find the one that suits your needs perfectly.
            Once you pick a career consultant, booking an appointment is just a click away!  If you have any questions or concerns, fill out the form below and we will get back to you soon!
          </p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number:</label>
            <input type="phone" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Questions or comments:</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </form>
      </div>
      );
    }
  }
  export default Home;

  // todo 
  // Add contact form at the bottom of the page
  // Ask about logo image to use for navbar
  // Create a jumbotron?
  // 