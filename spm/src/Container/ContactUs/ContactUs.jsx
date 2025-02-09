import React, { useState } from 'react';
import './ContactUs.css';
import { BsTelephoneForwardFill, BsGeoAltFill, BsEnvelopeFill } from 'react-icons/bs';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setMessageSent(true); 
    setTimeout(() => setMessageSent(false), 3000);
    setFormData({ name: '', address: '', email: '', message: '' }); 
  };

  return (
    <div className='contact section__padding app__bg' id='contact'>
      <div className='contactHeader'>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '20px', color: 'white' }}>
        We’d love to hear from you! Whether you have a question about our products, 
        need assistance with an order, or simply want to share feedback, our team 
        is here to help. At Spice Mountain, we value every interaction with
         our customers and strive to provide prompt and personalized support. 
         You can reach us via phone, email, or by filling out the form below.
          For updates and exclusive offers, follow us on social media or visit
           our store. We’re excited to assist you and make your experience with
            us as seamless as possible!
        </p>
      </div>

      <div className='content-left'>
        <div className='location'>
          <p>
            <span><BsGeoAltFill className='icon' /> Address</span><br />
            No 1234,<br />
            Dharmapala Street,<br />
            Hakmana Road,<br />
            Matara.
          </p>
        </div>
        <div className='call'>
          <p>
            <span><BsTelephoneForwardFill className='icon' /> Call Us</span><br />
            041-2264252<br />
            071-2266252
          </p>
        </div>
        <div className='mail'>
          <p>
            <span><BsEnvelopeFill className='icon' /> Email</span><br />
            spacemountain@gmail.com
          </p>
        </div>
      </div>

      <div className='content-right'>
        <h2>Send Message</h2>
        {messageSent && (
          <div className="message-box">
            <p>Message sent successfully!</p>
          </div>
        )}
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              className={focused === 'name' ? 'focused' : ''}
              required
            />
            <div className={`input-underline ${focused === 'name' ? 'active' : ''}`} />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onFocus={() => setFocused('address')}
              onBlur={() => setFocused('')}
              className={focused === 'address' ? 'focused' : ''}
              required
            />
            <div className={`input-underline ${focused === 'address' ? 'active' : ''}`} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              className={focused === 'email' ? 'focused' : ''}
              required
            />
            <div className={`input-underline ${focused === 'email' ? 'active' : ''}`} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused('')}
              className={focused === 'message' ? 'focused' : ''}
              required
            />
            <div className={`input-underline ${focused === 'message' ? 'active' : ''}`} />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
