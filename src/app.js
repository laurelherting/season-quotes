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
          <p>These are tulips</p>
        </section>
        <section>
          <p>These are paintbrushes</p>
        </section>
        <section>
          <p>These are trees</p>
        </section>
      </div>
    );
  }
}

export default App;
