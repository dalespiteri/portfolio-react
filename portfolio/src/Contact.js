import React, { Component } from 'react';
import './style/contact.css';
import logoBandW from './images/logoBandW.svg';
import gitHub from './images/gitHub.svg';
import linkedIn from './images/linkedIn.svg';
import googlePlus from './images/googlePlus.svg';

class Contact extends Component {
  render() {

    return (
      <div className={'contactContainer pageContainer ' + this.props.className} >

        <div className="contactContent content">
            <img src={logoBandW} className="contactLogo" alt="black and white pixel face logo" />
            <div className="contactEmail">
                <a href="mailto:dalespiteri@gmail.com"><p>dalespiteri@gmail.com</p></a>
            </div>
            <ul className="contactLogoList">
                <a href="http://www.linkedin.com/in/dalespiteri" target="_blank"><li><img src={linkedIn} className="contactSubLogo" alt="linked in logo" /></li></a>
                <a href="https://github.com/dalespiteri" target="_blank"><li><img src={gitHub} className="contactSubLogo" alt="git hub logo" /></li></a>
                <a href="https://plus.google.com/+DaleSpiteri" target="_blank"><li><img src={googlePlus} className="contactSubLogo" alt="google plus logo" /></li></a>
            </ul>
            <div className="contactForm">
              <form action="https://formspree.io/dalespiteri@gmail.com" method="POST">
                <div className="formIDs">
                  <input type="text" name="name" placeholder="name" />
                  <input type="email" name="replyto" placeholder="email" />
                </div>
                <div className="formMessage">
                  <textarea type="text" name="message" placeholder="message" />
                </div>
                <input className="formSubmit" type="submit" value="send" />
              </form>
            </div>
        </div>
      </div>
  );
  }
}

export default Contact;
