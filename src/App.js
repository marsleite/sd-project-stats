import React from 'react';
import './App.css';
import Header from './components/Header';
import DestinyLibrary from './components/DestinyLibrary';

function App() {
  return (
  <div className="App">
    <div className="cont">
     <Header />
     <div className="informacoes">
     <h1 className="apresentacao">Destiny stats made easy and quick <br></br>Try searching your guardian below</h1>
     <div className="info">
      <DestinyLibrary />
     </div></div>
    </div>
    <div className="rodape">Keep in touch, for more info please visit to our <a href="#">Twitter</a> account or contact admin@thetower.com</div>
  </div>
  );
}

export default App;
