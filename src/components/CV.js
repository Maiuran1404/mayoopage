import React, { Component } from 'react';
import { motion } from "framer-motion";
// import '../styles.scss';
import styled from 'styled-components';

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

const Link = styled.a`
  text-decoration: none;
`

const ProjecTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: black;
  font-weight: 500;
  margin-left: 20px;
`
const ProjectDesc = styled.p`
  font-size: 14px;
  color: black;
  font-weight: 200px;
  margin-left: 20px;
`

const ProjectSub = styled.p`
  font-size: 12px;
  margin-top: 0px;
  padding-top: 0px;
  color: black;
  font-weight: 100px;
  margin-left: 20px;
`

const ProjectTag = styled.div`
  background: #eee;
  border-radius: 3px 3px 3px 3px;
  color: black;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 5px 0 5px;
  position: relative;
  margin: 0 10px 10px 20px;
  text-decoration: none;
  -webkit-transition: color 0.2s;
`


class CV extends Component {

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
            <Link href={this.props.site}>
            <motion.div
              animate={{
                x: 0,
                backgroundColor: `${this.props.color}`,
                
                
              }}
              // style={{ rotate: 0, x: "calc(50vh - 100px)" }}  
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // backgroundColor="#fff000"
              className='project-card'
              onClick={() => this.handleClick(this.props.pageName)}>
                <ProjecTitle> {this.props.name} </ProjecTitle>
                <ProjectSub> {this.props.sub}</ProjectSub>
                {this.props.tag1 && <ProjectTag> {this.props.tag1}</ProjectTag>}
                {this.props.tag2 && <ProjectTag> {this.props.tag2}</ProjectTag>}
                {this.props.tag3 && <ProjectTag> {this.props.tag3}</ProjectTag>}
                <ProjectDesc> {this.props.desc} </ProjectDesc>
              
            </motion.div>
            </Link>
          </div>
          </div>
          
        );
    }
}

export default CV;