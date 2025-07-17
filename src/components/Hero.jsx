
import React from 'react';
import Cleo1 from '../assets/images/Cleo1.jpg';

const Hero = () => {
  return (
    <div 
      className="relative min-h-[70vh] flex items-center"
      style={{
        backgroundImage: `url(${Cleo1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Custom light green heading using hex color */}
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: '#c5ff00' }}  // custom color for huge if true logo
        >
          Cleo Abram
        </h1>
        
        {/* Custom blue paragraph using hex color */}
        <p 
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          style={{ color: '#3d11d8ff'}}  // 
        >
          Video journalist making Huge if true, an optimistic show about tech.
        </p>
        
    
      </div>
    </div>
  );
};

export default Hero;