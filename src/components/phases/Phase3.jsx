import React from 'react';

const Phase3 = ({ onNext }) => {
  return (
    <div className="phase">
      <h2>Phase 3: Schedule Practice Sessions</h2>
      <p>Task: Schedule practice sessions for your prioritized skills.</p>
      {/* Placeholder for tasks/input */}
      <button onClick={onNext}>Finish</button>
    </div>
  );
};

export default Phase3;
