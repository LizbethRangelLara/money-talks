import React from 'react';

class ContactUs extends React.Component{
    render(){
        return(
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
        )
    }
}

export default ContactUs;