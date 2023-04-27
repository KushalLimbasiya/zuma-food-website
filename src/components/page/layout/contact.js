import React, { useState } from 'react';
import '../../style/main.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // Add code to send form data to server here
  };

  return (
    <section className='contact' id='contact'>
        <div className='section-title'>
            <span className='title'>Contact Us</span>
        </div>
        <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <div className='form-img'>

            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    </section>
  );
};

export default ContactForm;
