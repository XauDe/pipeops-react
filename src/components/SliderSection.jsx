import { useState, useEffect } from 'react';
import business from '../images/business.svg';
import freelance from '../images/freelance(2).svg';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
    </div>
  );
};

const SliderSection = () => {
  const images = [
    business,
    freelance
    // Add more image URLs as needed
  ];

  return (<ImageSlider images={images} />);
};

export default SliderSection;