import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <div className="content">
          <div className='desktop frank-reviews'>
            <a href='index.html'><img className='icon' src={logo}/></a> {/*Logo Font is Doppio One*/}
            <a href='index.html'><span className='first'>FRANK</span><span className='last'>REVIEWS</span></a>
          </div>
          <nav className="desktop">
            <ul>
              <li><a href='#'>On campus</a></li>
              <li><a href='#'>Online</a></li>
              <li><a href='#'>For companies</a></li>
              <li><a href='#'>Sign in</a></li>
            </ul>
          </nav>
          <nav className="mobile">
            <ul>
              <li><a href='#'><img src='./resources/images/ic-logo.svg'/></a></li>
              <li><a href='#'><img src='./resources/images/ic-on-campus.svg'/></a></li>
              <li><a href='#'><img src='./resources/images/ic-online.svg'/></a></li>
              <li><a href='#'><img src='./resources/images/ic-login.svg'/></a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default App;
