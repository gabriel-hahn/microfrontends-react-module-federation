import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (element, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  !!onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, element);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.querySelector('#_marketing-dev-root');

  if (devRootElement) {
    mount(devRootElement, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
