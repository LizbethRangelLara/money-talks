import React from 'react';
import "../css/home.css";
import Jumbotron from './jumbotron.js';
import ContactUs from './contactus.js';
import Footer from './footer.js';

class Home extends React.Component {
    render()
    {
      return (
        <div>
          <div>
            <Jumbotron />
          </div>
          <div className="form-intro">
            <p>Finding your perfect consultant has never been easier.  Browse our list of top quality career consultants to find the one that suits your needs perfectly.
              Once you pick a career consultant, booking an appointment is just a click away!  If you have any questions or concerns, fill out the form below and we will get back to you soon!
            </p>
          </div>
          <hr />
          <div>
            <ContactUs />
          </div>
          <hr />
          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }
  export default Home;

  // todo