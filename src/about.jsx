import React from "react";
import './index.css';
import bg from './assets/bg.jpg';

function About() {
    return (
        <div className="body">
            {/* Background image */}
            <img className="bg" src={bg} alt="Background" />
            
            <div className="about">
                <h1>About Me</h1>
                <p>Hello, I'm John Paul Cambiado, a student passionate about technology and programming.</p>

                <h2>My Journey</h2>
                <p>
                    I began my journey with programming at an early age, finding the challenge of coding both exciting and intimidating. Over the years, I have learned to embrace the learning process and overcome the challenges that come with mastering new technologies.
                </p>

                <h2>My Mission</h2>
                <p>
                    My mission is to continue growing as a developer, learning from both my successes and my failures. I aim to contribute to meaningful projects that can make a positive impact on the world and improve my skills as I progress through my studies.
                </p>

                <h2>What You Can Expect from This Site</h2>
                <p>
                    This website is a reflection of my journey, interests, and the things I am passionate about. You’ll find sections about my education, hobbies, and personal projects that I’ve worked on. I hope you enjoy browsing through and learning more about me.
                </p>
            </div>
        </div>
    );
}

export default About;
