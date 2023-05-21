import React, { useState } from 'react';
import axios from 'axios';
import '../../style/main.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    const url = 'http://localhost/contact.php';
    const fData = new FormData();
    fData.append('name', name);
    fData.append('email', email);
    fData.append('subject', subject);
    fData.append('message', message);
    axios.post(url, fData).then(response=> alert(response.data)).catch(error=> console.error(error));

  };

  return (
    <section className='contact' id='Contact'>
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
          <button onSubmit={handleSubmit} type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
