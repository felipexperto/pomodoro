import React from 'react';
import logo from './logo.svg';
import './App.css';

// Written as a function declaration
function Paragraph(): JSX.Element {
  return <p>Edit <code>src/App.tsx</code> and save to reload.</p>
}

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Paragraph />
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
