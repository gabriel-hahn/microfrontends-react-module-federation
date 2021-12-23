import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Progress from '../components/Progress';

const AuthApp = lazy(() => import('../components/AuthApp'));
const DashboardApp = lazy(() => import('../components/DashboardApp'));
const MarketingApp = lazy(() => import('../components/MarketingApp'));

const Routes = () => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/dashboard">
            {!isSignedIn ? <Redirect to="/" /> : <DashboardApp />}
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
