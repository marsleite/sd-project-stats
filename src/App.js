import React from 'react';
import './App.css';
import Header from './components/Header';
import DestinyLibrary from './components/DestinyLibrary';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="App-header">
      <DestinyLibrary />
     </div>
    </div>
  );
}

export default App;
