import React, { Component } from 'react';
import { motion } from "framer-motion";


//Components
import Intro from '../components/intro';
import Project from '../components/project';

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


class Home extends Component {
    render(){
        return (
            <motion.div 
              initial='initial' 
              animate='animate' 
              exit={{ opacity: 0 }}
              >
                <motion.div>
                    <Intro />
                </motion.div>
                <h2>Programming</h2>
                <motion.div variants={stagger}>
                    <Project name='Digital Brain' pageName='DigBrain'/>
                    <Project name='AirBnb clone' pageName='DigBrain'/>
                    <Project />
                </motion.div>

                <h2>UI / UX </h2>
                <Project />
                <Project />
                <Project />
            </motion.div>
        )
    }
}

export default Home;