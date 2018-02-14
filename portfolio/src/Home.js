import React, { Component } from 'react';
import './style/home.css';
import pixelLogo from './images/pixelLogo.svg';

class Home extends Component {
  render() {

    return (
      <div className="homeContainer pageContainer">
        <div className="content homeContent">
          <div className="pixelLogo">
            <img src={ pixelLogo } alt="Pixel Logo" />
          </div>
          <div className="speechBubble">
            <p>Hi, I'm Dale.<br />I design and develop web pages.<br />How can I help you?</p>
          </div>
        </div>
      </div>
  );
  }
}

export default Home;
