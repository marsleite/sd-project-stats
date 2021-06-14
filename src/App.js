import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DestinyList from './pages/DestinyList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>DESTINY CRUCIBLE STATS</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ DestinyList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
