import React, { Component, Fragment} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import memoji from './memoji.png';
import Maiuran from './Maiuran.png';

class intro extends Component {
    render() {
        return (
            <div className='container center'>
                <motion.div 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className='product-row'>
                    
                <motion.img
                    initial={{ x: 900, y: -100, opacity: 0 }}
                    animate={{ x: 30, y: -60, scale: 1.03, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    key='image'
                    src={Maiuran}
                    width={250}/>

                    <motion.div
                    animate={{
                        x: 0,
                        boxShadow: `5px 5px 0 rgba(0, 0, 0, 0.1)`,
                        
                      }}
                    className='card'>
                        <p 
                        initial={{ x: 400, y: -100, opacity: 0 }}
                        animate={{ x: 300, y: -100, opacity: 1 }}
                        className='category'>Full stack + UI/UX </p>
                        <h2 className='product-info'>Maiuran Loganathan</h2>
                        <br/>
                        <h3>Why</h3>
                        <p>Effectively build products- and startups that solve meaningful challenges</p>
                        <h2>Trying to become better at entrepreneurship like an Athlete</h2>
                        <h2>Inspiration Wall: Kobe Bryant, Ed Sheeran & Tony Stark</h2>
                        <h2>You will not work harder than me</h2>
                        <h3>Competencies</h3>
                        <p>Full stack: MERN stack, Firebase + MongoDb Atlas, React, Gsap, Framer, Nextjs</p>
                        <p>UI/UX: Figma, Sketch</p>     
                        <p>Mobile: Swift</p>    
                    </motion.div>
                </motion.div>
            </div>
        );
    }
}

export default intro;