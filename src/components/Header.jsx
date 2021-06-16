import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <div className="simbolo"></div>
        <div className="logo"><a href="#">THE</a><a href="#" className="logo_negrito">TOWER</a></div>
      </header>
    )
  }
}

export default Header;