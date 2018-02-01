import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import './style/cssReset.css';
import './style/general.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activePage: 'home'
    };
    this.showSkills = this.showSkills.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showContact = this.showContact.bind(this);
  }

  showSkills() {
    this.setState({
      activePage: 'skills'
    });
  }

  showPortfolio() {
    this.setState({
      activePage: 'portfolio'
    });
  }

  showAbout() {
    this.setState({
      activePage: 'about'
    });
  }

  showContact() {
    this.setState({
      activePage: 'contact'
    });
  }

  render() {
    return (
      <div>
      { this.state.activePage === 'home' ? <Home /> : null }
      { this.state.activePage === 'skills' ? <Skills /> : null }
      { this.state.activePage === 'portfolio' ? <Portfolio /> : null }
      { this.state.activePage === 'about' ? <About /> : null }
      { this.state.activePage === 'contact' ? <Contact /> : null }
      <Menu
        skills={ this.showSkills }
        portfolio= { this.showPortfolio }
        about={ this.showAbout }
        contact={ this.showContact }
      />
      </div>
    );
  }
}

export default App;
