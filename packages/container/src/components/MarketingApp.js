import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('The container noticed navigation in Marketing!');
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
