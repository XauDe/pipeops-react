import React from 'react';

const Phase2 = ({ onNext }) => {
  return (
    <div className="phase">
      <h2>Phase 2: Prioritize Your Skills</h2>
      <p>Task: Select and prioritize 5 skills from your list.</p>
      {/* Placeholder for tasks/input */}
      <button onClick={onNext}>Continue</button>
    </div>
  );
};

export default Phase2;
