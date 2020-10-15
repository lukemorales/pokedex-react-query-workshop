import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonPage from '../pages/Pokemon';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:pokemonId" component={PokemonPage} />

      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
