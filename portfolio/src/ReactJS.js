import React, { Component } from 'react';
import ReactLogo from './images/react.svg';

class ReactJS extends Component {
  render() {
    return (
      <div className="reactSkill">
        <div className="skillTop">
          <div className="skillHeading">
            <div>
              <h3>class <span>ReactJS</span> extends Component &#123;</h3>
              <p>render() &#123;</p>
              <p>return( The Tool Kit )</p>
              <p>&#125;</p>
              <h3>&#125;</h3>
            </div>
          </div>
          <div className="skillImage">
            <img src={ReactLogo} alt="proud naked guy" />
          </div>
        </div>
        <div className="skillBottom">
          <p>Whenever I asked what to learn next in front-end developement, the response was almost unanimously ReactJS. It is the most popular and in demand Javascript framework around currently. It gives the ability to make fast, dynamic, and responsive websites and web apps that are easily modifiable. This website is an example of that power. Loading elements on the fly let's people browse without unecessary work from the browser rendering and re-rendering materials that aren't needed. A valuable tool in any developers kit.</p>
        </div>
      </div>
    )
  }
}

export default ReactJS;
