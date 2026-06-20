import { useState } from 'react'
import { ReactLenis } from 'lenis/react';
import { motion } from 'framer-motion';
import './App.css'
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import bg from './assets/bg.png'

function App() {

  const sectionRef =useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start start ", "end start"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <ReactLenis root>
      <div >
        <section className="section1" ref={sectionRef} >
        <motion.div 
          className="scene-bg" 
          style={{ 
            backgroundImage: `url(${bg})`,
            y: scaleY,  
            
          }} >
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            color:"white"
          }}>
          Hello World!
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} 
          style={{
          color:"white"
        }}>
          Todo List
        </motion.div>
        </motion.div>
        </section>
      </div>
    </ReactLenis>
  )
}

export default App
