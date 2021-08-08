import React from 'react';
import "../css/footer.css";


class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div>
                    <p>555 Money Talks Lane, 90210, Beverly Hills, CA </p>
                    <img src="../MTLogo2.png" />
                </div>
            </div>
        );
    }
}

export default Footer;