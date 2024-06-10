import React, { useState } from 'react';
import './feedback.css'; // Import the CSS file

const FeedbackForm = () => {
  // Create state variables to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
    console.log({ name, email, feedback });
    setName('');
    setEmail('');
    setFeedback('');
    setSubmitted(true);
  };

  return (
    <div className='bg'>
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      {submitted && <p>Thank you for your feedback!</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></div>
  );
};

export default FeedbackForm;
