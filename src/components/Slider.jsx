import React, { useState } from 'react';
import Phase1 from './phases/Phase1';
import Phase2 from './phases/Phase2';
import Phase3 from './phases/Phase3';
import Phase4 from './phases/Phase4';
import './Slider.css';

const Slider = () => {
  const [phase, setPhase] = useState(1);

  const handleNext = () => {
    setPhase(prevPhase => prevPhase + 1);
  };

  return (
    <div className="slider-container">
      {phase === 1 && <Phase1 onNext={handleNext} />}
      {phase === 2 && <Phase2 onNext={handleNext} />}
      {phase === 3 && <Phase3 onNext={handleNext} />}
      {phase === 4 && <Phase4 onNext={handleNext} />}
    </div>
  );
};

export default Slider;
