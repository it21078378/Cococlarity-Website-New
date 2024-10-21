import React, { useState } from 'react';
import './ContactForm.css'; // Add your custom styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Add form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h3>Contact Us</h3>
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message or Query</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-right">
        <h3>Contact Details</h3>
        <p>For further queries please reach us at:</p>
        <p><a href="mailto:researchcoco@gmail.com">researchcoco@gmail.com</a></p>
        <p>Hope this project helped you in some manner. Thank you!</p>
        <p><strong>- Team CocoRemedy</strong></p>
      </div>
    </div>
  );
};

export default ContactForm;
