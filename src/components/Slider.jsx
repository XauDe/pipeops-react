import React, { useState } from 'react';
import Homepage from './Homepage';
import Phase1 from './phases/Phase1';
import Phase2 from './phases/Phase2';
import Phase3 from './phases/Phase3';
import Phase4 from './phases/Phase4';
import './Slider.css';

const Slider = () => {
  const [phase, setPhase] = useState(0); // Start from 0 for the homepage
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [hasSchedule, setHasSchedule] = useState(true); // Placeholder for schedule status

  const handleNext = () => {
    setPhase(prevPhase => (prevPhase < 4 ? prevPhase + 1 : 0)); // Go back to 0 (homepage) after Phase 4
    setTaskCompleted(false); // Reset task completion for the next phase
  };

  const completeTask = () => {
    setTaskCompleted(true);
  };

  const handleGetStarted = () => {
    setPhase(1);
  };

  return (
    <div className="slider-container">
      {phase === 0 && <Homepage onGetStarted={handleGetStarted} hasSchedule={hasSchedule} />}
      {phase === 1 && <Phase1 onCompleteTask={completeTask} />}
      {phase === 2 && <Phase2 onCompleteTask={completeTask} />}
      {phase === 3 && <Phase3 onCompleteTask={completeTask} />}
      {phase === 4 && <Phase4 onCompleteTask={completeTask} />}
      {phase !== 0 && (
        <button
          className={`continue-button ${taskCompleted ? 'enabled' : ''}`}
          onClick={handleNext}
          disabled={!taskCompleted}
        >
          Continue <span>&rarr;</span>
        </button>
      )}
    </div>
  );
};

export default Slider;
