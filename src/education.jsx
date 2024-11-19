import React from "react";
import './index.css';
import bg from './assets/bg.gif';
import ccdps from './assets/ccdps.png';
import calhigh from './assets/calhigh.jpg';
import ncf from './assets/ncf.jpg';

function Education() {
    return (
        <div className="body">
            {/* Background image */}
            <img className="bg" src={bg} alt="Background" />
            <div className="education">
                <h1>Educational Background</h1>

                {/* CCDPS Image */}
                <img className="ccdps" src={ccdps} alt="Calabanga Central Division Pilot School" />
                <img className="calhigh" src={calhigh} alt="Calabanga National Science High School" />
                <img className="ncf" src={ncf} alt="Naga College Foundation" />

                {/* Elementary Section */}
                <h2 className="elementary">Elementary</h2>
                <p className="elementary-description">
                    I studied Elementary at Calabanga Central Division Pilot School with an Honorable Award.
                </p>

                {/* High School Section */}
                <h2 className="highschool">High School</h2>
                <p className="highschool-description">
                    I studied high school at Calabanga National High School from Junior High until Senior High, 
                    graduating with the Computer Servicing strand and an Honorable Award.
                </p>

                {/* College Section */}
                <h2 className="college">College</h2>
                <p className="college-description">
                    I am currently studying at Naga College Foundation with a degree in Computer Science (2nd Year).
                </p>
            </div>
        </div>
    );
}

export default Education;
