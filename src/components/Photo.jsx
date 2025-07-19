
// import Cleo3 from '../assets/images/Cleo3.png';

// const Photo = () => {
//   return (
//     <div className="flex justify-center items-center p-4">
//       {/* Constrained container with max-width */}
//       <div className="w-full max-w-2xl overflow-hidden rounded-xl">
//         <img
//           src={Cleo3}
//           alt="Cleo Abram"
//           className="w-full h-auto object-contain"
//               />
              
              
//         {/* Paragraph section */}
//         <div className="p-6">
//           <p className="text-lg text-gray-700">
//             Cleo Abram is a video journalist who creates "Huge if True," an optimistic show about technology.
//             Through her work, she explores groundbreaking innovations and explains complex tech concepts
//             in an accessible and engaging way.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Photo;



import { motion } from 'framer-motion';
import Cleo3 from '../assets/images/Cleo3.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Photo = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <motion.div
        className="w-full max-w-2xl overflow-hidden rounded-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated image */}
        <motion.img
          src={Cleo3}
          alt="Cleo Abram"
          className="w-full h-auto object-contain"
          variants={slideInLeft}
        />
        
        {/* Animated paragraph */}
        <motion.div 
          className="p-6"
          variants={slideInUp}
        >
          <p className="text-lg text-gray-700">
            Cleo Abram is a video journalist who creates "Huge if True," an optimistic show about technology. 
            Through her work, she explores groundbreaking innovations and explains complex tech concepts 
            in an accessible and engaging way.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;