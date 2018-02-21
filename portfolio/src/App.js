import React, { Component } from 'react';
import './style/cssReset.css';
import './style/general.css';
import Menu from './Menu';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activePage: 'home',
      subActivePage: '',
      offScreenMenu: true
    };
    this.showSkills = this.showSkills.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showContact = this.showContact.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  showSkills() {
    this.setState({
      subActivePage: this.state.activePage,
      activePage: 'skills',
      offScreenMenu: !this.state.offScreenMenu
    });
  }

  showPortfolio() {
    this.setState({
      subActivePage: this.state.activePage,
      activePage: 'portfolio',
      offScreenMenu: !this.state.offScreenMenu
    });
  }

  showAbout() {
    this.setState({
      subActivePage: this.state.activePage,
      activePage: 'about',
      offScreenMenu: !this.state.offScreenMenu
    });
  }

  showContact() {
    this.setState({
      subActivePage: this.state.activePage,
      activePage: 'contact',
      offScreenMenu: !this.state.offScreenMenu
    });
  }

  showMenu() {
    this.setState({
      offScreenMenu: !this.state.offScreenMenu
    });
  }

  render() {
    return (
      <div className="masterContainer">
        <div className={this.state.offScreenMenu ? "mobileHamburger" : "mobileHamburger hamburgerClose"} onClick={this.showMenu}>
          <div className="hamBar topBar"></div>
          <div className="hamBar middleBar middleBarOne"></div>
          <div className="hamBar middleBar middleBarTwo"></div>
          <div className="hamBar bottomBar"></div>
        </div>
        <div className="page">
          { this.state.subActivePage === 'home' ? <Home className="subActive" /> : this.state.activePage === 'home' ? <Home /> : null }
          { this.state.subActivePage === 'skills' ? <Skills className="subActive" /> : this.state.activePage === 'skills' ? <Skills className="active" /> : null }
          { this.state.subActivePage === 'portfolio' ? <Portfolio className="subActive" /> : this.state.activePage === 'portfolio' ? <Portfolio className="active" /> : null }
          { this.state.subActivePage === 'about' ? <About className="subActive" /> : this.state.activePage === 'about' ? <About className="active" /> : null }
          { this.state.subActivePage === 'contact' ? <Contact className="subActive" /> : this.state.activePage === 'contact' ? <Contact className="active" /> : null }
        </div>
        <Menu
          skills={ this.showSkills }
          portfolio= { this.showPortfolio }
          about={ this.showAbout }
          contact={ this.showContact }
          mobileMenu={ this.state.offScreenMenu ? null : "onScreenMenu" }
        />
      </div>
    );
  }
}

export default App;
