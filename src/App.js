import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Library from './component/Library';

function App() {
  return (
    <BrowserRouter>
      <Library />
    </BrowserRouter>
  );
}

export default App;
