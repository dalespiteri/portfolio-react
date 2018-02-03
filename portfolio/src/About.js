import React, { Component } from 'react';
import './style/about.css';
import aboutHead from './images/aboutHead.png';
import aboutHeadTwo from './images/aboutHeadTwo.png';

class About extends Component {
  render() {

    return (
      <div className={"aboutContainer pageContainer " + this.props.className}>
          <div className="testObject"></div>
      </div>
  );
  }
}

export default About;
