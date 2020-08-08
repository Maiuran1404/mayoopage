import React, { Component, Fragment} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import memoji from './memoji.png';
import Maiuran from './Maiuran.png';
import styled from 'styled-components';

const Secondhead = styled.p`
    padding-left: 0px;
    color: #7C9CBF;
`

class secondintro extends Component {
    render() {
        return (
            <div className='container center'>
                <motion.div 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className='product-row'>
                    
                <motion.img
                    initial={{ x: 900, y: -100, opacity: 0 }}
                    animate={{ x: 300, y: -60, scale: 1.03, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    key='image'
                    src={memoji}
                    width={250}/>

                    <motion.div
                    animate={{
                        x: 0,
                        boxShadow: `5px 5px 0 rgba(0, 0, 0, 0.1)`,
                        
                      }}
                    className='card'>
                        <Secondhead
                        initial={{ x: 400, y: -100, opacity: 0 }}
                        animate={{ x: 300, y: -100, opacity: 1 }}
                        > Midnight thoughts </Secondhead>
                        
                        <br/>
                        <p> Become better at entrepreneurship like an Athlete</p>
                        <p>Inspiration Wall: Kobe Bryant, Ed Sheeran & Tony Stark</p>
                        <p>You will not work harder than me</p>

                    </motion.div>
                </motion.div>
            </div>
        );
    }
}

export default secondintro;