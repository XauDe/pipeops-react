import React from 'react';

const Homepage = ({ onGetStarted }) => {
  return (
    <div className="phase">
      <h2>Welcome to the Essentials App</h2>
      <p>Your journey to essentialism and skill planning begins here.</p>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default Homepage;
