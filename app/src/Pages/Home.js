import React from 'react';
import '../Styles/Home.css';
import fmi1 from '../Images/fmi1.png'

function Home() {
  return (
    <div className="home-container">
      <h1>Home!!!</h1>
      <img src={fmi1} alt="FMI" className="home-image" />
    </div>
  );
}

export default Home;
