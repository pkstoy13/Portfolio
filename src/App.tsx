//import logo from './logo.svg';
import './App.css';
import React from 'react';
import city from './tomnjerry.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={city} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
