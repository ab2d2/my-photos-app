import React from 'react';
import './App.scss';
import Nav from './Layout/Nav';
import { Route, Switch } from 'react-router';

import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <header className="App-header">
              <p>Hi! RICK and MORTY rocks!</p>
            </header>
          )}
        />
        <Route path="/characters" component={CharacterList} />
        <Route path="/episodes" component={EpisodeList} />
        <Route path="/locations" component={LocationList} />
      </Switch>
    </div>
  );
}

export default App;
