import { createApp } from 'vue';

import Dashboard from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.querySelector('#_dashboard-dev-root');

  if (devRootElement) {
    mount(devRootElement);
  }
}

export { mount };
