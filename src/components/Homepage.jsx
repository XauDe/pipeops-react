import React from 'react';
import './Homepage.css';

const Homepage = ({ onGetStarted, hasSchedule }) => {
  return (
    <div className="phase homepage">
      <h2>Welcome to the Essentials App</h2>
      <p>Your journey to essentialism and skill planning begins here.</p>
      <button onClick={onGetStarted}>Get Started</button>
      <div className="schedule-section">
        {hasSchedule ? (
          <div>
            <h3>Your Weekly Schedule</h3>
            <div className="schedule-table-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Session 1</th>
                    <th>Session 2</th>
                    <th>Session 3</th>
                  </tr>
                </thead>
                <tbody>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>You don't have a schedule yet. Create one by clicking "Get Started".</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
