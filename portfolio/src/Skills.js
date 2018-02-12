import React, { Component } from 'react';
import HTML from './HTML';
import CSS from './CSS';
import Javascript from './Javascript';
import ReactJS from './ReactJS';
import Illustrator from './Illustrator';
import Photoshop from './Photoshop';
import './style/skills.css';

class Skills extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activeSkill: 'HTML',
      subActiveSkill: ''
    };
    this.showHTML = this.showHTML.bind(this);
    this.showCSS = this.showCSS.bind(this);
    this.showJavascript = this.showJavascript.bind(this);
    this.showReactJS = this.showReactJS.bind(this);
    this.showIllustrator = this.showIllustrator.bind(this);
    this.showPhotoshop = this.showPhotoshop.bind(this);
  }

  showHTML(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'HTML'
    });
  }

  showCSS(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'CSS'
    });
  }

  showJavascript(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'Javascript'
    });
  }

  showReactJS(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'ReactJS'
    });
  }

  showIllustrator(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'Illustrator'
    });
  }

  showPhotoshop(){
    this.setState({
      subActiveSkill: this.state.activeSkill,
      activeSkill: 'Photoshop'
    });
  }

  render() {

    return (
      <div className={"skillsContainer pageContainer " + this.props.className}>
        <div className="skillsContent content">
          <div className="header">
            <h1>Skills</h1>
          </div>
          <div className="skillList">
            <ul>
              <li onClick={this.showHTML} id={this.state.activeSkill === 'HTML' ? "activeSkill" : null}>html</li>
              <li onClick={this.showCSS} id={this.state.activeSkill === 'CSS' ? "activeSkill" : null}>css</li>
              <li onClick={this.showJavascript} id={this.state.activeSkill === 'Javascript' ? "activeSkill" : null}>javascript</li>
              <li onClick={this.showReactJS} id={this.state.activeSkill === 'ReactJS' ? "activeSkill" : null}>reactJS</li>
              <li onClick={this.showIllustrator} id={this.state.activeSkill === 'Illustrator' ? "activeSkill" : null}>illustrator</li>
              <li onClick={this.showPhotoshop} id={this.state.activeSkill === 'Photoshop' ? "activeSkill" : null}>photoshop</li>
            </ul>
          </div>
          <div className="skill">
           { this.state.activeSkill === 'HTML' ? <HTML /> : null }
           { this.state.activeSkill === 'CSS' ? <CSS /> : null }
           { this.state.activeSkill === 'Javascript' ? <Javascript /> : null }
           { this.state.activeSkill === 'ReactJS' ? <ReactJS /> : null }
           { this.state.activeSkill === 'Illustrator' ? <Illustrator /> : null }
           { this.state.activeSkill === 'Photoshop' ? <Photoshop /> : null }
          </div>
        </div>
      </div>
  );
  }
}

export default Skills;
