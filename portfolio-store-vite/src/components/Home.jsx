import React, { useEffect, useState } from 'react';
import transition from '../transition';
import { motion } from "framer-motion";
import Slideshow from './SlideShow';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export const Home = () => {
  // Move useEffect into the functional component


  return (
    <motion.div className="home-containers"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1>Home</h1>
      <Slideshow className="slideshow" />
      <div className="under-show">
        {/* <IphoneCards className="iphone-cards" /> */}
    
      </div>
    
    </motion.div>
  );
};

// Exporting the component with transition if needed
export default transition(Home);
