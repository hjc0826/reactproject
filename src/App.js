import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './demo.js';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
			学习react的第一步,也是一大步
        </p>
		 <h2>现在是 {props.date.toLocaleTimeString()}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
			<Demo data= {'a'} />
      </header>
    </div>
  );
}
export default App;
