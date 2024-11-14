import React from "react";
import './index.css';
import guitar from './assets/guitar.jpg';
import ball from './assets/ball.jpg';

// Reusable Hobby Card Component
function HobbyCard({ image, title, description, buttonText, buttonClass }) {
  return (
    <div className="hobby-card">
      <img className="hobby-img" src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
}

function Hobbies() {
  return (
    <div className="hobby-container">
      <h1>About Me</h1> {/* Main title */}
      
      {/* Hobby Cards Row */}
      <div className="hobby-cards-row">
        {/* Guitar Section */}
        <HobbyCard
          image={guitar}
          title="Playing Guitar"
          description="Playing guitar is my hobby, where I express my love for music. It's not just a passion, but a way for me to connect with myself and others, bringing joy through melodies and chords."
          buttonText="Learn Chords"
          buttonClass="learn-chords-btn"
        />

        {/* Basketball Section */}
        <HobbyCard
          image={ball}
          title="Basketball"
          description="Playing basketball is my hobby, where I challenge myself physically and mentally. It's a sport that brings excitement, teamwork, and perseverance."
          buttonText="Learn Dunk"
          buttonClass="learn-ball-btn"
        />
      </div>
    </div>
  );
}

export default Hobbies;
