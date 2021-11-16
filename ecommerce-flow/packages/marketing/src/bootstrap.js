import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(<h1>Hi there!</h1>, element);
};

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.querySelector('#_marketing-dev-root');

  if (devRootElement) {
    mount(devRootElement);
  }
}

export { mount };
