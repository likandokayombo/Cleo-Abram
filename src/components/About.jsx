
import { motion } from 'framer-motion';
import { FaEnvelope, FaRobot, FaPlane, FaLaptopCode, FaAtom, FaLightbulb } from 'react-icons/fa';
import Cleo2 from '../assets/images/Cleo2.jpg';

const About = () => {
  return (
    <div 
      className="min-h-screen py-16 px-4 sm:px-6"
      style={{ backgroundColor: '#203f44' }}
    >
      <div className="max-w-4xl mx-auto">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Huge If True
          </motion.h1>
          <motion.div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#c5ff00' }}
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Sponsorship Section */}
        <motion.div 
          className="rounded-2xl p-6 mb-12 relative overflow-hidden border-2"
          style={{ 
            borderColor: '#3d11d8',
            backgroundColor: 'rgba(61, 17, 216, 0.05)'
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5" style={{ backgroundColor: '#3d11d8' }}></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full opacity-5" style={{ backgroundColor: '#c5ff00' }}></div>
          
          <div className="flex items-start mb-6">
            <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(61, 17, 216, 0.1)' }}>
              <FaEnvelope className="text-2xl" style={{ color: '#3d11d8' }} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#c5ff00' }}>Sponsor an Episode</h2>
          </div>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            If you'd like to sponsor a Huge If True episode, reach out at the email below.
          </p>
          
          <motion.a 
            href="mailto:sponsorships@hugeiftrue.com" 
            className="inline-block font-medium py-3 px-6 rounded-full transition-all duration-300 transform"
            style={{ 
              background: 'rgba(61, 17, 216, 0.2)',
              color: '#c5ff00',
              border: '2px solid #3d11d8'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(197, 255, 0, 0.2)',
              color: '#3d11d8',
              borderColor: '#c5ff00'
            }}
            whileTap={{ scale: 0.95 }}
          >
            sponsorships@hugeiftrue.com
          </motion.a>
        </motion.div>
        
        {/* Bio Section */}
        <motion.div 
          className="rounded-2xl p-6 relative overflow-hidden border-2"
          style={{ 
            backgroundColor: 'rgba(197, 255, 0, 0.05)',
            borderColor: '#c5ff00'
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5" style={{ backgroundColor: '#c5ff00' }}></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-5" style={{ backgroundColor: '#3d11d8' }}></div>
          
          <div className="flex items-start mb-6">
            <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(197, 255, 0, 0.1)' }}>
              <FaLightbulb className="text-2xl" style={{ color: '#c5ff00' }} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#c5ff00' }}>Cleo Abram's Bio</h2>
          </div>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Cleo Abram is a video journalist who produces <span className="font-bold" style={{ color: '#c5ff00' }}>Huge If True</span>, an optimistic show about science and technology. Huge If True is an antidote to the doom and gloom, helping a wide audience see better futures they can help build.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            In each episode, Cleo dives deep into one innovation that could shape the future. She has explored:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <FaRobot className="text-xl mt-1 mr-3" style={{ color: '#c5ff00' }} />
              <span className="text-gray-200">Humanoid robots at Boston Dynamics</span>
            </div>
            <div className="flex items-start">
              <FaPlane className="text-xl mt-1 mr-3" style={{ color: '#c5ff00' }} />
              <span className="text-gray-200">Supersonic planes at NASA</span>
            </div>
            <div className="flex items-start">
              <FaLaptopCode className="text-xl mt-1 mr-3" style={{ color: '#c5ff00' }} />
              <span className="text-gray-200">Quantum computers at IBM</span>
            </div>
            <div className="flex items-start">
              <FaAtom className="text-xl mt-1 mr-3" style={{ color: '#c5ff00' }} />
              <span className="text-gray-200">The Large Hadron Collider at CERN</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Previously, Cleo was a video producer at Vox and directed for Explained on Netflix.
          </p>
        </motion.div>
        
        {/* Featured Projects */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#c5ff00' }}>Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Boston Dynamics", 
                desc: "Humanoid robots transforming industries",
                icon: <FaRobot className="text-3xl" style={{ color: '#c5ff00' }} />
              },
              { 
                title: "NASA Supersonic", 
                desc: "The future of high-speed air travel",
                icon: <FaPlane className="text-3xl" style={{ color: '#c5ff00' }} />
              },
              { 
                title: "Quantum Computing", 
                desc: "Next generation computational power",
                icon: <FaLaptopCode className="text-3xl" style={{ color: '#c5ff00' }} />
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="rounded-xl p-6 transition-all duration-300 border-2"
                style={{ 
                  borderColor: '#3d11d8',
                  backgroundColor: 'rgba(61, 17, 216, 0.05)'
                }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <h4 
                  className="text-xl font-bold text-center mb-2"
                  style={{ color: '#c5ff00' }}
                >
                  {project.title}
                </h4>
                <p className="text-gray-300 text-center">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Optimism Quote with Image */}
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(197, 255, 0, 0.05)',
            border: '2px solid #c5ff00'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Image Container with Gradient Overlays */}
          <div className="relative h-48 md:h-56 w-full overflow-hidden">
            <img 
              src={Cleo2} 
              alt="Cleo Abram" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d11d8] to-[#c5ff00] opacity-30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#203f44] to-transparent z-20"></div>
          </div>
          
          {/* Quote Content */}
          <div className="p-6 md:p-8 text-center">
            <blockquote className="text-xl md:text-2xl italic max-w-2xl mx-auto mb-4" style={{ color: '#c5ff00' }}>
              "Huge If True is more than a show - it's a mission to reveal the optimistic future we can build together through technology."
            </blockquote>
            <p className="font-semibold text-lg" style={{ color: '#c5ff00' }}>- Cleo Abram</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;