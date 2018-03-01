import React, { Component } from 'react';
import {
  BrowseRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <p>spring text</p>
        </section>
        <section>
          <p>summer text</p>
        </section>
        <section>
          <p>fall text</p>
        </section>
        <section>
          <p>winter text</p>
        </section>
      </div>
    );
  }
}

export default App;
