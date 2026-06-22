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
  const scale1 = useTransform(scrollY, [0, 1], [1, 1.4]);
  


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
        <motion.div className="Scenecontent" style={{ opacity:opacity1,
          
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Hello Welcome to our Todo List!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} 
            >
            Todo List
          </motion.p>
        </motion.div>
        
        </section>
      </div>
    </ReactLenis>
  )
}

export default App
