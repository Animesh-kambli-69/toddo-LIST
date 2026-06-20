import { useState } from 'react'
import { ReactLenis } from 'lenis/react';
import { motion } from 'framer-motion';
import './App.css'
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import bg from './assets/bg.png'

function App() {
  const scene1Ref = useRef(null);
  const { scrollYProgress: scrollY } = useScroll({
    target: scene1Ref,
    offset: ["start start", "end start"]
  });
  const y1 = useTransform(scrollY, [0, 1], ["0%", "50%"]);
  const opacity1 = useTransform(scrollY, [0, 0.8], [1, 0.8]);
  const scale1 = useTransform(scrollY, [0, 1], [1, 1.1]);


  return (
    <ReactLenis root>
      <div >
        <section className="section1" ref={scene1Ref} >
        <motion.div 
          className="scene-bg" 
          style={{ 
            backgroundImage: `url(${bg})`,
            y: y1,
            opacity: opacity1,
            scale: scale1,
          }} 
        />
        
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "0 4px 12px rgba(84, 81, 81, 0.4)"
            }}>
            Hello World!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} 
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "500",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)"
            }}>
            Todo List
          </motion.div>
        </div>
        </section>
      </div>
    </ReactLenis>
  )
}

export default App
