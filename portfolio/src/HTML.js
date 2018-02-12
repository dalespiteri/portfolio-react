import React, { Component } from 'react';
import Skull from './images/skull.png';

class HTML extends Component {
  render() {
    return (
      <div className="HTMLskill">
        <div className="skillTop">
          <div className="skillHeading">
            <div>
              <h3>&lt;<span>html</span>&gt;</h3>
              <p>the skeleton</p>
              <h3>&lt;/html&gt;</h3>
            </div>
          </div>
          <div className="skillImage">
            <img src={Skull} alt="proud naked guy" />
          </div>
        </div>
        <div className="skillBottom">
          <p>I actually first learned HTML as a kid. Making sites with friends using Geocities and Angelfire about videogames we used to play, I learned the basic building blocks of a webpage. It was a hobby for a couple years and it's amazing to see how much I had left unturned now that I am relearning it.</p>
        </div>
      </div>
    )
  }
}

export default HTML;
