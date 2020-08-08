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

    handleClick(){
        window.location.href='/';
    }

    render(){
        return (
            <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
                <motion.div>
                <h2>Digital Brain information</h2>
                <motion.div variants={stagger}>
                    <h3>Information</h3>
                    <button onClick={this.handleClick}> Click here </button>
                </motion.div>
                </motion.div>
              
            </motion.div>
        )
    }
}

export default Home;