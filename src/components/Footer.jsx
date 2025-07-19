
import { motion } from 'framer-motion';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Icon animation variants
  const iconVariants = {
    hover: {
      y: -8,
      scale: 1.2,
      color: '#c5ff00',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9,
      color: '#3d11d8'
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright section */}
          <div className="mb-6 md:mb-0">
            <motion.p 
              className="text-gray-400 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              LICENSE TERMS & CONDITIONS HUGE, {currentYear}
            </motion.p>
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-8">
            <motion.a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative group"
            >
              <FaYoutube className="text-3xl text-white" />
              <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                YouTube
              </span>
            </motion.a>
            
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative group"
            >
              <FaTwitter className="text-3xl text-white" />
              <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Twitter
              </span>
            </motion.a>
            
            <motion.a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative group"
            >
              <FaInstagram className="text-3xl text-white" />
              <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Instagram
              </span>
            </motion.a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-2 h-2 rounded-full bg-gray-700"
                animate={{ 
                  y: [0, -10, 0],
                  backgroundColor: ['#4B5563', '#c5ff00', '#4B5563']
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} HUGE if true. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;