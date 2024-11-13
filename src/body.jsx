import React from 'react';
import bg from './assets/bg.jpg';
import dp from './assets/dp.jpg'; 
import './index.css';

function Body() {
  return (
    <div>
      <img className="bg" src={bg} alt="Background" />
      <img className="dp" src={dp} alt="Display Picture" />
    </div>
  );
}

export default Body;
