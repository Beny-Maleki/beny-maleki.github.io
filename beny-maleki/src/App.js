import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import profilePic from './pic.png'; // import your image here



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          className="header-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Benyamin Maleki
          </motion.h1>
          <p> (Yet Under Construction :D)</p>
        </motion.div>
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >      
          <motion.a
            href="mailto:benyaminmaleki81@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='icons'
          >
            <MdEmail size={35} color="#2352c9"/>
          </motion.a>    
          <a href="https://github.com/Beny-Maleki" className='icons'>
            <FaGithub size={35} color="#2352c9" />
          </a>  
          <a href="https://www.linkedin.com/in/benyamin-maleki-747019207/" className='icons'>
          <FaLinkedin size={35} color="#2352c9" />
          </a>
        </motion.div>
      </header>

      <body className='canvas'>
      <section >
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
          >
            <strong>Sharif University of Technology</strong> - BSc in Computer Engineering
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
          >
            <strong>Mandegar Alborz High School</strong> - High School Diploma in Mathematics and Physics
          </motion.li>
        </ul>
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <ul>
          <motion.li
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            Lighting Manager for Unreal Engine 5
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            Fake News Classification with MPNet
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            Detoxifying Text from Hate Speech
          </motion.li>
        </ul>
        </section>
      </body>
    </div>
  );
}

export default App;
