import React from 'react';

const Phase3 = ({ onCompleteTask }) => {
  return (
    <div className="phase">
      <h2>Phase 3: Schedule Practice Sessions</h2>
      <p>Task: Schedule practice sessions for your prioritized skills.</p>
      {/* Placeholder for tasks/input */}
      <button onClick={onCompleteTask}>Complete Task</button>
    </div>
  );
};

export default Phase3;
