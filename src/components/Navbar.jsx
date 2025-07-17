
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';

// const Navbar = () => {
//   return (
//     <nav className="relative flex items-center justify-between p-4 bg-white shadow-md">
//       {/* Logo on left */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             src={logo}
//             alt="Company Logo"
//             className="h-8 object-contain" // Adjust height as needed
//             width={100}
//             height={30}
//           />
//         </Link>
//       </div>
      
//       {/* Centered navigation links */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-8 mr-[50px]">
//         <Link
//           to="/"
//           className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
//         >
//           About
//         </Link>
//         <Link
//           to="/socials"
//           className="text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-md"
//         >
//           Socials
//         </Link>
//       </div>
      
//       {/* Optional right-side elements (keeps layout balanced) */}
//       <div className="invisible md:visible">
//         {/* Add future elements here (cart, user, etc) */}
//         <div className="w-24"></div> {/* Spacer matching logo width */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="relative flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center z-50">
        <Link to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="h-8 object-contain"
            width={100}
            height={30}
          />
        </Link>
      </div>
      
      {/* Desktop Navigation (centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-4 md:space-x-8">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <NavLink to="/socials" text="Socials" />
      </div>
      
      {/* Hamburger Menu (Mobile only) */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <span className={`bg-gray-700 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`bg-gray-700 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-gray-700 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-8 text-xl">
          <MobileNavLink to="/" text="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/about" text="About" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/socials" text="Socials" onClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden md:block">
        <div className="w-24"></div>
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
  >
    {text}
  </Link>
);

// Mobile NavLink with animation
const MobileNavLink = ({ to, text, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105 transition-transform duration-300"
  >
    {text}
  </Link>
);

export default Navbar;