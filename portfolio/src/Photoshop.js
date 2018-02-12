import React, { Component } from 'react';
import PhotoshopLogo from './images/psLogo.svg';
import PhotoshopInterface from './images/psInterface.png';

class Photoshop extends Component {
  render() {
    return (
      <div className="photoshopSkill">
        <div className="skillTop">
          <div className="skillHeading">
            <img src={PhotoshopInterface} alt="photoshop interface" />
          </div>
          <div className="skillImage">
            <img src={PhotoshopLogo} alt="photoshop logo" />
          </div>
        </div>
        <div className="skillBottom">
          <p>A website without images is just boring, but can also get fairly heavy. Working with large format images as a graphic designer has taught me a lot about compression and getting the most out of a small file size. This is very helpful in keeping graphic heavy sites light and fast on their feet.</p>
        </div>
      </div>
    )
  }
}

export default Photoshop;
