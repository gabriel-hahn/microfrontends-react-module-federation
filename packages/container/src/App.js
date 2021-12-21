import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/" component={MarketingApp} />
            <Route path="/auth" component={AuthApp} />
            <Route />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
