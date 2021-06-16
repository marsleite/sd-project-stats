import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <div className="simbolo"></div>
        <div className="logo"><a href="#">The</a><a href="#" className="logo_negrito">Tower</a></div>
      </header>
    )
  }
}

export default Header;