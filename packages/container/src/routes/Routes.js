import React, { lazy, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Progress from '../components/Progress';

const AuthApp = lazy(() => import('../components/AuthApp'));
const MarketingApp = lazy(() => import('../components/MarketingApp'));

const Routes = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/" component={MarketingApp} />
          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
