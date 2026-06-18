import { useState } from 'react'
import { ReactLenis } from 'lenis/react';
import { motion } from 'framer-motion';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ReactLenis root>
      <div classname="first-bg">
        <section ref={scene1}className="section1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Hello World!
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Todo List
        </motion.div>
        </section>
      </div>
    </ReactLenis>
  )
}

export default App
