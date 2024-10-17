import React, { useState } from 'react';
import "../Styles/Qtify.css";
import { Link } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the feedback (e.g., send it to the server or display a success message)
    console.log('Feedback submitted', formData);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
         <Link to="/"> <button type="submit" className="submit-btn">Submit Feedback</button></Link>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
