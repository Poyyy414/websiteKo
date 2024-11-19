import React from 'react';
import bg from './assets/bg.gif';
import dp from './assets/dp.jpg';
import './index.css';

function Body() {
  return (
    <div className="body">
      {/* Background image */}
      <img className="bg" src={bg} alt="Background" />
      
      {/* Display picture */}
      <img className="dp" src={dp} alt="Display Picture" />
      
      {/* Main text content */}
      <div className="content">
        <h2>Hello, Welcome</h2>
        <h1>I'm John Paul Cambiado</h1>
        <p>
          John Paul Cambiado is a student who finds programming complex and challenging,
          but is committed to learning and gradually accepting it as part of his journey.
          <br />
          He embraces the process, even when it feels overwhelming.
        </p>
      </div>
    </div>
  );
}

export default Body;
