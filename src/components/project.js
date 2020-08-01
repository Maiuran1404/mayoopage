import React, { Component } from 'react';
import { motion } from "framer-motion";
import '../styles.scss';

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


class Project extends Component {

    handleClick(){
        // e.preventDefault();
        console.log('The link was clicked.');
        // const name = this.props.name.trim('%20');
        window.location.href=`/${this.props.pageName}`;
    }



    render(){

        return (
          <div className="project-div">
          <div className='project-info'>
            <motion.div
              animate={{
                x: 0,
                backgroundColor: `${this.props.color}`,
                boxShadow: `5px 5px 0 rgba(0, 0, 0, 0.2)`,
                
              }}
              style={{ rotate: 0, x: "calc(50vh - 100px)" }}  
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              backgroundColor="#fff000"
              className='project-card'
              onClick={() => this.handleClick(this.props.pageName)}>
                <h3> {this.props.name} </h3>
            </motion.div>
          </div>
          </div>
          
        );
    }
}

export default Project;