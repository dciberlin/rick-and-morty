import React from 'react';
import '../scss/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EpisodesList from './EpisodesList';
import CharactersList from './CharactersList';
import Navigation from './Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/episodes">
            <EpisodesList />
          </Route>
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path="/">
            <Navigation></Navigation>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
