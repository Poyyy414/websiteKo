import React from "react";
import './index.css';
import bg from './assets/bg.jpg'; // Replace with the correct image path

function Contact() {
    return (
        <div className="body">
            {/* Background image */}
            <img className="bg" src={bg} alt="Background" />
            
            {/* Contact Content */}
            <div className="contact">
                <h1>Contact Me</h1>
                <h2>If you'd like to get in touch, feel free to email me at:</h2>
                <p><a href="mailto:ariasampoy414@gmail.com">ariasampoy414@gmail.com</a></p>
                <p>Looking forward to hearing from you!</p>
            </div>
        </div>
    );
}

export default Contact;
