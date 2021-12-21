import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <Header />
        <Switch>
          <Route path="/" component={AuthApp} />
          <Route path="/auth" component={MarketingApp} />
          <Route />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
