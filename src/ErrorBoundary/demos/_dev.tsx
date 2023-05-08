/**
 * iframe: true
 */
import { useState } from 'react';
import ErrorBoundary from '../index';

import { Button } from 'antd';

const App = () => {
  const [showError, setError] = useState(true);
  const list = {};
  return (
    <div>
      {showError ? (
        // @ts-ignore
        list.map((i) => i)
      ) : (
        <Button
          onClick={() => {
            setError(true);
          }}
        >
          点击触发错误
        </Button>
      )}
    </div>
  );
};

export default () => (
  <ErrorBoundary showDev>
    <App />
  </ErrorBoundary>
);
