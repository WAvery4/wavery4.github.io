import React from 'react';
import './About.css';
import self from '../Resources/selfSide.jpg';

function About() {
    return (
        <div className="container">
            <img className="portrait" src={self}></img>
            <p className="text">
                I am an undergraduate student at the University of Texas at Austin pursuing a degree in Electrical and Computer Engineering.
                My main interests are in Software Engineering, Digital Signal Processing and Data Science, and I am seeking an internship for the Summer of 2021.
                <br/><br/>
                Currently, I am working as an Undergraduate Tutor for UT Austin's Electrical and Computer Engineering Department, where I tutor students in Linear Algebra (M340L)
                and Signals and Systems (EE313).
            </p>
        </div>
    );
}

export default About;