import React from 'react';

const Phase1 = ({ onCompleteTask }) => {
  return (
    <div className="phase">
      <h2>Phase 1: Identify Your Skills</h2>
      <p>Task: List 10 skills you're interested in.</p>
      {/* Placeholder for tasks/input */}
      <button onClick={onCompleteTask}>Complete Task</button>
    </div>
  );
};

export default Phase1;
