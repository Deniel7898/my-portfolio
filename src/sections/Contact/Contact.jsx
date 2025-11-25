import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" rows="6" required></textarea>
        </div>
        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
