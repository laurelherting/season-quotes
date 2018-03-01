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
          <p>"Though I do not believe that a plant will spring up where no seed has been, I have great faith in a seed... Convince me that you have a seed there, and I am prepared to expect wonders." --Henry David Thoreau</p>
        </section>
        <section>
          <p>"Overhead hung a summer sky furrowed with the rush of rockets; and from the east a late moon, pushing up beyond the lofty bend of the coast, sent across the bay a shaft of brightness which paled to ashes in the red glitter of illuminated boats." --Edith Wharton, the House of Mirth</p>
        </section>
        <section>
          <p>"Autumn is a second spring when every leaf is a flower." --Albert Camus</p>
        </section>
        <section>
          <p>"In seed time learn, in harvest teach, in winter enjoy." --William Blake</p>
        </section>
      </div>
    );
  }
}

export default App;
