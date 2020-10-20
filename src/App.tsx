import React from 'react';

import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { PokedexProvider } from './contexts/pokedex';
import Routes from './routes';
import GlobalStyles from './styles';

const App = () => (
  <BrowserRouter>
    <PokedexProvider>
      <Routes />
      <GlobalStyles />
      <ReactQueryDevtools />
    </PokedexProvider>
  </BrowserRouter>
);

export default App;
