import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sub from "./Sub";

function App({flag, onClick}) {

  const element = flag === true ? <div className="red">テスト赤です</div>
  : <div className="blue">テスト青です</div>;

  return (
    <div className="App">
      <header className="App-header">
      <Sub />
      <button onClick={onClick}>onclickTestBUTTON</button>
        <img src={logo} className="App-logo" alt="logo" />
        {element}
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
