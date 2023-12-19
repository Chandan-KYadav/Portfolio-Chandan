import './Contact.css';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [done, setDone] =useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hvpt665', 'template_g05bwyf', form.current, 'dhtpQPEMEjVf0fpnO')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="contact" id='Contact'>
            <div className="contact-left">
                <div className="services-left">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" required/>
                    <input type="email" name="user_email" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" required></textarea>
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Thanks for contacting me!"}</span>
                </form>
            </div>
        </div>
    );
}

export default Contact;
