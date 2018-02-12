import React, { Component } from 'react';
import IllustratorLogo from './images/illLogo.svg';
import IllustratorInterface from './images/illInterface.png';

class Illustrator extends Component {
  render() {
    return (
      <div className="illustratorSkill">
        <div className="skillTop">
          <div className="skillHeading">
            <img src={IllustratorInterface} alt="illustrator interface" />
          </div>
          <div className="skillImage">
            <img src={IllustratorLogo} alt="Illustrator Logo" />
          </div>
        </div>
        <div className="skillBottom">
          <p>Illustrator's vector software is second to none. It is ideal software for SVG file production, and iconography in web design. It keeps files small, and pixel perfect regardless of size.</p>
          <p>On top of this, since starting web design, I've found Illustrator to be the ideal software for wire framing, and site planning. The way it uses shapes, layers, and colours offers much more versatility than Photoshop and make it much faster and user friendly for element design. Illustrator is by far my favourite tool in the Adobe tool kit and I have found it tremendously useful in my exploration of web design.</p>
        </div>
      </div>
    )
  }
}

export default Illustrator;
