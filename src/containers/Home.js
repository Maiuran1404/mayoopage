import React, { Component, Fragment} from 'react';
import { motion } from "framer-motion";


//Components
import Intro from '../components/intro';
import Project from '../components/project';
import CV from '../components/CV';
import Secondintro from '../components/secondintro';
//assets
import Maiuran from '../components/Maiuran.png';

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
                <Secondintro />
            </motion.div>
            
           
                <motion.div className="project-div">
                        
                        <div className="project-info">
                          <div className="project-titles">
                            <p>Full Stack + Front-end projects</p>
                            <h2> 👨🏽‍💻Programming  </h2>
                          </div>

                          <Project className="project-card" color='#bee3db' pageName='DigBrain' 
                            name='Delta'
                            desc='A note-taking application with spaced practice algorithm'
                            tag1=''
                            site='https://mongodb-digitalbrain.herokuapp.com/'/>
                            <br/>
                          <Project className="project-card" color='#89b0ae' pageName='DigBrain'
                            name='Music BnB'
                            desc='A platform to rent out expensive instruments (piano, violin etc.) when not in use'
                            tag1=''
                            site='https://music-bnb.herokuapp.com/'/>
                            <br/>
                          <Project className="project-card" color='#555b6e' pageName='DigBrain'
                            name='API fun: New York Times + Twitter'
                            desc='Get the latest tweets about each book on the New York Times Best Seller list'
                            site='https://nytimes-twitter.netlify.app/' />
                                                    <br/>
                        <br/>
                        </div>

                        <div className="project-info">
                          <div className="project-titles">
                            <p> Design </p>
                            <h2> 👨🏽‍🎨  UI / UX </h2>
                            {/* <br/>
                            <h3> In  progress </h3> */}
                          </div>
                          
                           <Project 
                            className="project-card" 
                            name='Digital Brain'
                            color='#eee4e1'
                            pageName='DigBrain'/>
                            <br/>
                          <Project className="project-card" color='#e6beae' name='AirBnb clone' pageName='DigBrain'/>
                          <br/>
                          <Project className="project-card" color='#ecf8f8' name='Facebook clone' pageName='DigBrain'/> 
                          <br/>
                        <br/>
                        </div>

                        
                        

                        <div className="project-info">
                          <div className="project-titles">
                            <p> Branding & Marketing + Sales </p>
                            <h2>  🦦 Previous Experience  </h2>
                          </div>


                          <CV className="project-card" color='#FFF' pageName='DigBrain' 
                            name='Co-founder'
                            sub='YSI, Young Sustainable Impact'
                            desc="Co-founded and helped scale from 39 - 10'000 applications within one year"
                            tag1=''
                            site='https://mongodb-digitalbrain.herokuapp.com/'/>
                            <br/>
                          <CV className="project-card" color='#FFF' pageName='DigBrain'
                            name='CEO and founder'
                            sub='Meracio'
                            desc='Connecting talented, international students with consulting opportunity to accelerate future-oriented companies.'
                            tag1=''
                            site='https://music-bnb.herokuapp.com/'/>
                            <br/>
                          <CV className="project-card" color='#FFF' pageName='DigBrain'
                            name='Business Strategist + Open Source'
                            sub='BA-HR Law Firm and DoLittle (Wilhelmsen)'
                            desc="Stragized: (1) How would you design a law firm in the 21'st century? (2) How can you open-source the shipping industry"
                            site='https://nytimes-twitter.netlify.app/' />
                                                      <br/>
                        <br/>

                        </div>


                        <div className="project-info">
                          <div className="project-titles">
                            <p> Education and Achivements </p>
                            <h2> 📜 CV stuff   </h2>
                          </div>


                          <CV className="project-card" color='#FFF' pageName='DigBrain' 
                            name='Bachelor of Science in Business'
                            sub="Minerva Schools"
                            desc='A revolutionizing uni with 4 years in 7 years and based on projects/skills instead of exams/lectures'
                            tag1=''
                            site='https://mongodb-digitalbrain.herokuapp.com/'/>
                          <CV className="project-card" color='#FFF' pageName='DigBrain'
                            name='Skipped a year of High School'
                            sub="Elvebakken High School"
                            desc='Did 13 high schools subjects whilst in secondary and skipped a year of high school'
                            tag1=''
                            site='https://www.aftenposten.no/konomi/i/jaqVA/Han-er-18-ar_-tok-videregaende-pa-to-ar_-og-laget-appen-han-kaller-Facebook-for-utdanning'/>
                                            <img
                    initial={{ x: 900, y: -100, opacity: 0 }}
                    animate={{ x: 30, y: -60, scale: 1.03, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    key='image'
                    src={Maiuran}
                    width={250}/>
                          <CV className="project-card" color='#FFF' pageName='DigBrain'
                            name="Other 'achievements'"
                            sub="SIKT, 25 and under in Northern Europe, "
                            desc="Spoken at Norway's largest business conference, selected to the Crown Prince's annual leadership conference, awarded 25 and under in Northern Europe by NBForum"
                            site='https://www.nbforum.com/25-and-under/12-maiuran-loganathan/' />
                                                                                <br/>
                        <br/>
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