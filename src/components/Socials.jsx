
import { motion } from 'framer-motion';

// Import YouTube thumbnails
import thumbnail1 from '../assets/images/youtube-thumbnails/thumbnail1.jpg';
import thumbnail2 from '../assets/images/youtube-thumbnails/thumbnail2.jpg';
import thumbnail3 from '../assets/images/youtube-thumbnails/thumbnail3.jpg';
import thumbnail4 from '../assets/images/youtube-thumbnails/thumbnail4.jpg';
import thumbnail5 from '../assets/images/youtube-thumbnails/thumbnail5.jpg';

const Socials = () => {
  // YouTube thumbnails data
  const youtubeThumbnails = [
    { id: 1, image: thumbnail1 },
    { id: 2, image: thumbnail2 },
    { id: 3, image: thumbnail3 },
    { id: 4, image: thumbnail4 },
    { id: 5, image: thumbnail5 },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div 
      className="min-h-screen py-16 px-4 sm:px-6"
      style={{ backgroundColor: '#203f44' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#c5ff00' }}
          >
            Cleo Abram YouTube Thumbnails
          </motion.h1>
          <motion.div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#c5ff00' }}
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        {/* YouTube Thumbnails Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {youtubeThumbnails.map((thumbnail) => (
            <motion.div 
              key={thumbnail.id}
              className="relative rounded-xl overflow-hidden shadow-lg"
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-video w-full">
                <img 
                  src={thumbnail.image} 
                  alt={`YouTube Thumbnail ${thumbnail.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
