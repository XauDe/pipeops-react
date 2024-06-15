import React from 'react';
import './Homepage.css';

const Homepage = ({ onGetStarted, hasSchedule }) => {
  return (
    <div className="phase homepage">

      <div style={{marginTop:30}}> 
      <h2 style={{fontSize:34}}>PickSkills</h2>
      <h4 style={{fontSize:20}}>Make use of effective strategies for managing multiple interests and skills</h4>
      <p>Develop a personal schedule and roadmap for making significant progress towards multiple skills without feeling overwhelmed! </p>

      </div>

      {/* returning  user*/}
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
          <div>
            {/*new user */}
            <p>You don't have a schedule yet. Create one by clicking "Get Started".</p>
            <button onClick={onGetStarted}>Get Started</button>

          </div>
          
        )}

      </div>
    </div>
  );
};

export default Homepage;
