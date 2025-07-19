
import { motion } from 'framer-motion'; // Import Framer Motion
import Cleo1 from '../assets/images/Cleo1.jpg';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="relative min-h-[70vh] flex items-center"
      style={{
        backgroundImage: `url(${Cleo1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
      >
        {/* Animated heading */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: '#c5ff00' }}
          variants={childVariants}
        >
          Cleo Abram
        </motion.h1>
        
        {/* Animated paragraph */}
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          style={{ color: '#3d11d8ff' }}
          variants={childVariants}
        >
          Video journalist making Huge if true, an optimistic show about tech.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;