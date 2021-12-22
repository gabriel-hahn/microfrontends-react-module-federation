import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/DashboardApp';

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
