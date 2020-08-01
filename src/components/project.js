import React, { Component } from 'react';


class Project extends Component {

    handleClick(){
        // e.preventDefault();
        console.log('The link was clicked.');
        window.location.href=`/${this.props.name}`;
    }



    render(){

        return (
            
            <div>
                <h3>Here is project: {this.props.name}</h3>
                <button onClick={() => this.handleClick(this.props.name)}> Click here </button>
            </div>
            
        );
    }
}

export default Project;