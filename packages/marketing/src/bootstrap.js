import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (element) => {
  const history = createMemoryHistory();

  ReactDOM.render(<App history={history} />, element);
};

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.querySelector('#_marketing-dev-root');

  if (devRootElement) {
    mount(devRootElement);
  }
}

export { mount };
