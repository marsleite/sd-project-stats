import React, { Component } from 'react';
// import Spinner from 'react-bootstrap/Spinner';

class Loading extends Component {
  render() {
    return (
      <div className="App">
        {/* <Spinner animation="border" /> */}
        <span className="sr-only">Carregando...</span>
      </div>
    );
  }
}

export default Loading;
