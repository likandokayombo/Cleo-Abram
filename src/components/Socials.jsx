// // src/components/Socials.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Socials = () => {
//   // Social media platforms data
//   const socialPlatforms = [
//     {
//       name: "YouTube",
//       handle: "@hugeiftrue",
//       color: "#FF0000",
//       icon: (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Twitter",
//       handle: "@cleoabram",
//       color: "#1DA1F2",
//       icon: (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Instagram",
//       handle: "@cleoabram",
//       color: "#E1306C",
//       icon: (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//         </svg>
//       )
//     },
//     {
//       name: "TikTok",
//       handle: "@hugeiftrue",
//       color: "#000000",
//       icon: (
//         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
//         </svg>
//       )
//     }
//   ];

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <div
//       className="min-h-screen py-16 px-4 sm:px-6"
//       style={{ backgroundColor: '#203f44' }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             style={{ color: '#c5ff00' }}
//           >
//             Follow Huge If True
//           </motion.h1>
//           <motion.div
//             className="w-24 h-1 mx-auto rounded-full"
//             style={{ backgroundColor: '#c5ff00' }}
//             initial={{ width: 0 }}
//             animate={{ width: '6rem' }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />
//           <motion.p
//             className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Join our community across platforms for the latest episodes, behind-the-scenes content, and tech discussions.
//           </motion.p>
//         </motion.div>
        
//         {/* Social Platforms Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           {socialPlatforms.map((platform, index) => (
//             <motion.div
//               key={index}
//               className="relative rounded-2xl overflow-hidden"
//               variants={item}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             >
//               {/* Platform Header */}
//               <div
//                 className="p-4 flex items-center"
//                 style={{ backgroundColor: platform.color }}
//               >
//                 <div className="text-white">
//                   {platform.icon}
//                 </div>
//                 <div className="ml-3">
//                   <h3 className="text-xl font-bold text-white">{platform.name}</h3>
//                   <p className="text-gray-100">{platform.handle}</p>
//                 </div>
//               </div>
              
//               {/* Screenshot Container */}
//               <div className="relative h-64 w-full bg-gray-800 flex items-center justify-center">
//                 {/* Mock screenshot */}
//                 <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex flex-col items-center justify-center p-4">
//                   <div className="w-16 h-16 rounded-full mb-4" style={{ backgroundColor: platform.color }}></div>
//                   <div className="h-2 w-32 bg-gray-600 rounded-full mb-2"></div>
//                   <div className="h-2 w-24 bg-gray-600 rounded-full mb-2"></div>
//                   <div className="h-2 w-28 bg-gray-600 rounded-full mb-4"></div>
//                   <div className="h-8 w-8 rounded-full border-2 border-gray-500 flex items-center justify-center">
//                     <div className="h-4 w-4 rounded-full" style={{ backgroundColor: platform.color }}></div>
//                   </div>
//                 </div>
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
//                 {/* Follow Button */}
//                 <motion.button
//                   className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-medium text-white z-10"
//                   style={{ backgroundColor: platform.color }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Follow
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         {/* Stats Section */}
//         <motion.div
//           className="mt-24 bg-gradient-to-r from-[#3d11d8] to-[#c5ff00] rounded-2xl p-8 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.7 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//             {[
//               { value: "500K+", label: "Subscribers" },
//               { value: "10M+", label: "Views" },
//               { value: "100K+", label: "Followers" },
//               { value: "5K+", label: "Comments" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black/20 p-6 rounded-xl backdrop-blur-sm"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//               >
//                 <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
//                 <div className="text-gray-200">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* CTA */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <h3 className="text-2xl font-bold mb-4" style={{ color: '#c5ff00' }}>Stay Connected</h3>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8">
//             Subscribe to our newsletter for exclusive content, early access to new episodes, and tech insights.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
//             />
//             <motion.button
//               className="px-8 py-3 rounded-full font-bold text-white"
//               style={{ backgroundColor: '#3d11d8' }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Socials;





// src/components/Socials.jsx
import React from 'react';
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
