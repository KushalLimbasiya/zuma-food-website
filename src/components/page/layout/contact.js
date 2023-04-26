import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
