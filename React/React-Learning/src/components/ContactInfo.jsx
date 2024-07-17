import React from 'react';

class ContactInfo extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            phone: "0321 4201344",
            email: "fatimaanjumofficial@gmail.com",
            fb: "Fatima Anjum",
            showMoreInfo: false
        };
        this.moreInfo = this.moreInfo.bind(this);
    }
    moreInfo()
    {
        this.setState({
            email: "f21ba021@ibitpu.edu.pk",
            insta: "fatimaanjumofficial",
            web: "bytebybugs.blogspot.com",
            showMoreInfo: true
        });
    }
    render()
    {
        return (
            <div>
                <h3>Contact Us: </h3>
                <p>Phone No: {this.state.phone}</p>
                <p>Email: {this.state.email}</p>
                <p>Facebook: {this.state.fb}</p>
                <button onClick={this.moreInfo}>For More Info</button>
                {this.state.showMoreInfo && (
                    <>
                        <p>Instagram: {this.state.insta}</p>
                        <p>Website: {this.state.web}</p>
                    </>
                )}
            </div>
        );
    }
}

export default ContactInfo;