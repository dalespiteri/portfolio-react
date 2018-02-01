import React, { Component } from 'react';
import './style/menu.css';

class Menu extends Component {
  render() {

    // map out a menu list
    let menuArray = ["skills", "portfolio", "about me", "contact"];
    const menuOptions = menuArray.map(menuItem =>
      <li>{menuItem}</li>
    );

    return (
      <div className="menuContainer">
        <ul>
          <li><button onClick={this.props.skills}>skills</button></li>
          <li><button onClick={this.props.portfolio}>portfolio</button></li>
          <li><button onClick={this.props.about}>about me</button></li>
          <li><button onClick={this.props.contact}>contact</button></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
