import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const variable = true;
const name = 'Mary';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p style={{
            fontStyle: 'italic'
          }}>
            Hello World!</p>
            <p>
              {name}
            </p>
            <p>
              {15339}
            </p>
            <p>
              {18*2}
            </p>
            <p>
              {variable && 'Variable is true'}
            </p>
            <p>
              Undefined: пусто {undefined}
            </p>
            <p>
              Null: пусто {null}
              </p>
              <p>
              False: пусто {false}
              </p>
              <p>
                True: пусто {true}
              </p>
            <p>
              {variable ? 'Everything is OK' : 'Variable is false'}
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
}

export default App;
