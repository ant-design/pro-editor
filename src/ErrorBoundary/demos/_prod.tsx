/**
 * iframe: 800
 */
import { Button } from 'antd';
import { useState } from 'react';
import ErrorBoundary from '..';

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
  <ErrorBoundary showDev={false}>
    <App />
  </ErrorBoundary>
);
