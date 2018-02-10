import React, { Component } from 'react';
import './style/portfolio.css';
import bobsBurgerThumb from './images/bobsBurgers.jpg';
import lanPartyThumb from './images/lanParty.jpg';
import lowThumb from './images/lordsOfWar.jpg';
import triviaThumb from './images/trivia.png';

class Portfolio extends Component {
  render() {

    return (
      <div className={"portfolioContainer pageContainer " + this.props.className}>

        <div className="portfolioContent content" >
          <div className="header">
            <h1>Portfolio</h1>
          </div>
          <div className="webpages">
            <div className="webpage triviaPage">
              <div>
                <img src={triviaThumb} alt="trivia webpage"/>
              </div>
              <div className="webpageInfo">
                <div>
                  <h2>Trivia: Random Trivia Game</h2>
                  <p>A ReactJS application that uses the Open Trivia API to pull random questions in your selected category.</p>
                  <a href="http://dalespiteri.github.io" target="_blank">
                    <button className="fullSiteLink">full site</button>
                  </a>
                  <a href="" target="_blank">
                    <button className="gitRepoButt">repository</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="webpage bobsBurgers">
              <div>
                <img src={bobsBurgerThumb} alt="bobs burgers webpage"/>
              </div>
              <div className="webpageInfo">
                <div>
                  <h2>Bob's Burgers: Restaurant Site</h2>
                  <p>A restaurant site based off the fictional Fox television series, Bob’s Burgers. Includes a landing page, locations, menu, and about section created using Bootstrap.</p>
                  <a href="http://dalespiteri.github.io" target="_blank">
                    <button className="fullSiteLink">full site</button>
                  </a>
                  <a href="" target="_blank">
                    <button className="gitRepoButt">repository</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="webpage lanParty">
              <img src={lanPartyThumb} alt="lan party web page"/>
              <div className="webpageHover">
                <div className="webpageInfo">
                  <h2>The LAN Party: Podcast Site</h2>
                  <p>A single page website that uses jQuery to navigate an info panel, cast panel, latest episode, and episode list panel.</p>
                  <a href="lanPartySite/index.html" target="_blank">
                    <button className="fullSiteLink">full site</button>
                  </a>
                  <a href="" target="_blank">
                    <button className="gitRepoButt">repository</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="webpage lordsOfWar">
              <img src={lowThumb} alt="lords of war webpage"/>
              <div className="webpageHover">
                <div className="webpageInfo">
                  <h2>Lords of War: Store Site</h2>
                  <p>A website for the Hobby store in Oakville, Lords of War: Games and Hobbies. My first completed site.</p>
                  <a href="lowSite/index.html" target="_blank">
                    <button className="fullSiteLink">full site</button>
                  </a>
                  <a href="" target="_blank">
                    <button className="gitRepoButt">repository</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
  }
}

export default Portfolio;
