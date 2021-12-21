import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Routes from './routes/Routes';

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <Routes />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
