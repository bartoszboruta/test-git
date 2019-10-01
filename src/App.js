import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header-small">
        <img src={logo} className="App-logo-big" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
