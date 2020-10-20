import React from 'react';

import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles';

const App = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyles />
    <ReactQueryDevtools />
  </BrowserRouter>
);

export default App;
