import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Benyamin Maleki
        </motion.h1>
        <p>Location: Tehran, Iran</p>
        <motion.a
          href="mailto:benyaminmaleki81@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          benyaminmaleki81@gmail.com
        </motion.a>
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a href="https://github.com/Beny-Maleki">GitHub</a> | 
          <a href="https://www.linkedin.com/in/benyamin-maleki-747019207/">LinkedIn</a>
        </motion.div>
      </header>

      <section>
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
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            Lighting Manager for Unreal Engine 5
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            Fake News Classification with MPNet
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            Detoxifying Text from Hate Speech
          </motion.li>
        </ul>
      </section>
    </div>
  );
}

export default App;
