
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Animation variants
  const overlayVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        when: "beforeChildren"
      }
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "afterChildren"
      }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      rotate: 10,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5 + i * 0.1,
        delay: i * 0.1
      }
    }),
    exit: {
      opacity: 0,
      x: 100,
      rotate: -15,
      scale: 0.7,
      transition: { duration: 0.2 }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -2, 2, -1, 0],
      color: '#3d11d8',
      textShadow: "0 0 8px rgba(197, 255, 0, 0.8)",
      transition: {
        rotate: { repeat: Infinity, duration: 1.5, ease: "linear" },
        scale: { type: "spring", stiffness: 400 },
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      rotate: [0, 5, -5, 0],
      color: '#c5ff00',
      transition: {
        duration: 0.5,
        rotate: { duration: 0.6 }
      }
    }
  };

  // Mobile links with correct paths
  const mobileLinks = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Socials", to: "/socials" }
  ];

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
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            className="bg-gray-700 h-0.5 w-6 rounded-sm"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6.5 }
            }}
          ></motion.span>
          <motion.span
            className="bg-gray-700 h-0.5 w-6 rounded-sm my-1"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          ></motion.span>
          <motion.span
            className="bg-gray-700 h-0.5 w-6 rounded-sm"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6.5 }
            }}
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="flex flex-col items-center space-y-8 text-xl"
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.text}
                  custom={i}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-gray-700 block px-6 py-3"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Navbar;


