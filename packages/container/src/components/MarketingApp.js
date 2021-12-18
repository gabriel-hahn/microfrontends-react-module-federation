import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
