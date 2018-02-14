import React, { Component } from 'react';
import './style/about.css';
import aboutHead from './images/aboutHead.png';
import aboutHeadTwo from './images/aboutHeadTwo.png';

class About extends Component {
  render() {

    return (
      <div className = {
        "aboutContainer pageContainer " + this.props.className
      } >
        <div className="aboutContent content">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="aboutText">
            <div className="outterBubble">
              <p>Hi, I’m Dale, and I’m a designer.</p>
            </div>
            <div className="bubbleConnector"></div>
            <div className="aboutSectionOne">
              <div className="aboutParagraph">
                <p>I’ve spent the last ten years as a professional graphic designer. I love design, but working with a static canvas can start to feel a bit dull. I want to add functionality. What could suit a graphic designer looking to add function to form better than web design?</p>
              </div>
              <div className="aboutImage aboutImageOne"><img src={aboutHead} alt="charicature head"/></div>
            </div>
            <div className="aboutSectionTwo">
              <div className="aboutImage aboutImageTwo"><img src={aboutHeadTwo} alt="charicature head"/></div>
              <div className="aboutParagraph">
                <p>So I researched. I looked at post grad programs. I looked at boot camps. I looked at self teaching. I asked people in the field. Overwhelmingly, I was pushed to teach myself. Why? Because learning doesn’t stop. If you can’t teach yourself, you’ll eventually be phased out. So I did that. I taught myself to code. I’m still teaching myself to code. I’ll always be teaching myself because new and exciting tools will continue to be developed and at my disposal.</p>
              </div>
            </div>
            <div className="bubbleConnector"></div>
            <div className="outterBubble">
              <p>So now, I’m Dale, and I'm a web designer.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
