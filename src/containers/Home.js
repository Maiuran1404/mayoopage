import React, { Component } from 'react';

//Components
import Intro from '../components/intro';
import Project from '../components/project';


class Home extends Component {
    render(){
        return (
            <div>
                <Intro />
                <h2>Programming</h2>
                <Project />
                <Project />
                <Project />
                <h2>UI / UX </h2>
                <Project />
                <Project />
                <Project />
            </div>
        )
    }
}

export default Home;