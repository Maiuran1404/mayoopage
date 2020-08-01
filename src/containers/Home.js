import React, { Component, Fragment} from 'react';
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
          <Fragment>       
            <motion.div className='container'>
                <Intro />
            </motion.div>
            
           
                <motion.div className="project-div">
                        
                        <div className="project-info">
                          <div className="project-titles">
                            <p>Full Stack + Front-end projects</p>
                            <h2> Programming </h2>
                          </div>

                          <Project className="project-card" name='Digital Brain' pageName='DigBrain'/>
                          <Project className="project-card" name='AirBnb clone' pageName='DigBrain'/>
                          <Project className="project-card" name='Facebook clone' pageName='DigBrain'/>
                        </div>

                        <div className="project-info">
                          <div className="project-titles">
                            <p> Design </p>
                            <h2> UI / UX  </h2>
                          </div>
                          <Project className="project-card" name='Digital Brain' pageName='DigBrain'/>
                          <Project className="project-card" name='AirBnb clone' pageName='DigBrain'/>
                          <Project className="project-card" name='Facebook clone' pageName='DigBrain'/>
                        </div>


                </motion.div>
            
                  
            
                  {/* <p className="topicp">Design</p>
                        <h2 className="topicheadings">UI/UX </h2>
                        <Project className='card project' name='Spotify redesigned' pageName='DigBrain'/>
                     */}
            </Fragment>
          // </motion.div>
        )
    }
}

export default Home;