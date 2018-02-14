import React, { Component } from 'react';
import Skin from './images/skin.png';

class CSS extends Component {
  render() {
    return (
      <div className="cssSkill">
        <div className="skillTop">
          <div className="skillHeading">
            <div>
              <h3>.<span>css</span>: &#123;</h3>
              <p>the: skin;</p>
              <h3>&#125;</h3>
            </div>
          </div>
          <div className="skillImage">
            <img src={Skin} alt="proud naked guy" />
          </div>
        </div>
        <div className="mobileHeader">
          <h3>the skin</h3>
        </div>
        <div className="skillBottom">
          <p>As someone who comes from a design background, CSS has been my favourite language so far to learn. The things you can do with it alone on top of very basic HTML structure is always a fun challenge for me. Seeing the introduction of Flex and Grids to CSS3 is something that gives me confidence that I'll continue to enjoy using the language as it develops and becomes more versatile.</p>
        </div>
      </div>
    )
  }
}

export default CSS;
