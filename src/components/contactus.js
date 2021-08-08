import React from 'react';

class ContactUs extends React.Component{
    render(){
        return(
            <form>
                <h1>Contact Us:</h1>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group w-100" >
                    <label htmlFor="phone">Phone number:</label>
                    <input type="phone" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Questions or comments:</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="submit">
                <input type="submit"></input>
                </div>
            </form>
        )
    }
}

export default ContactUs;