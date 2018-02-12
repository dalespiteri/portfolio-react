import React, { Component } from 'react';
import Muscles from './images/muscles.png';

class Javascript extends Component {
  render() {
    return (
      <div className="javascriptSkill">
        <div className="skillTop">
          <div className="skillHeading">
            <div>
              <h3>function <span>javascript</span> &#123;</h3>
              <p>(the).muscles();</p>
              <h3>&#125;</h3>
            </div>
          </div>
          <div className="skillImage">
            <img src={Muscles} alt="strong guy" />
          </div>
        </div>
        <div className="skillBottom">
          <p>I enjoy challenges, and Javascript is a problem solver's dream. There's always a way to manipulate your page structure and style in fascinating ways, but at times, it takes a lot of creativity.</p>
          <p>As a kid, I always enjoyed logic puzzles. You remember those right? You'd get a few paragraphs of a story, then a grid table with possibly a list of people, and a list of objects. You'd then have to use the information of the story to pair each person with an object using logical eliminations. Javascript reminds me of those. Sometimes you build from the front, sometimes you build from the back, sometimes you build from the middle. It's like building a Rube Goldberg contraption with language.</p>
        </div>
      </div>
    )
  }
}

export default Javascript;
