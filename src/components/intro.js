import React, { Component, Fragment } from 'react';
import { motion } from "framer-motion";

class intro extends Component {
    render() {
        return (
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
                <p>Full stack + UI/UX </p>
                <h2>Maiuran Loganathan</h2>
                <h3>Why</h3>
                <p>Effectively build products- and startups that solve meaningful challenges</p>
                <h3>Competencies</h3>
                <p>Full stack: MERN stack, Firebase + MongoDb Atlas, React, Gsap, Framer, Nextjs</p>
                <p>UI/UX: Figma, Sketch</p>     
                <p>Mobile: Swift</p>               
            </motion.div>

        );
    }
}

export default intro;