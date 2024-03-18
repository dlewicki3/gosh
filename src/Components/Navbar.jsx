import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-100%", opacity: 0 }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">Dominik Lewicki</div>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Contact</li>
        </ul>
        <button className='menu' onClick={toggleMenu}>
          {isOpen ? <BiX /> : <BiMenuAltRight />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ul-items"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Adjust the duration and ease for smoother animation
          >
            <div className="links">Home</div>
            <div className="links">About</div>
            <div className="links">Contact</div>
            <div className="links">Process</div>
            <div className="links">Brief</div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
