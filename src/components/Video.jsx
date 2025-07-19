
import { motion } from 'framer-motion';
import huge from '../assets/images/huge.mp4'; 

const Video = () => {
  return (
    <div 
      className="min-h-[60vh] px-4 sm:px-8 flex items-center justify-center py-8"
      style={{ backgroundColor: '#203f44' }}
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <video 
            src={huge}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default Video;