import { Awareness } from '@/index';
import { Button, Divider, Input } from 'antd';
import { memo } from 'react';
import { WebrtcProvider } from 'y-webrtc';

import { createStore, doc, Provider, useStore } from './store';

const App = memo(() => {
  const store = useStore((state) => ({
    count: state.count,
    increment: state.increment,
    updateText: state.updateText,
    text: state.text,
  }));
  const { count, increment, updateText, text } = store;

  return (
    <>
      <Divider />
      <Input
        value={text}
        onChange={(e) => {
          updateText(e.target.value);
        }}
      />
      <Divider />
      <p>Count: {count}</p>
      <Button onClick={increment}>To the Moon!</Button>
    </>
  );
});

const Container = () => (
  <Provider createStore={createStore}>
    <Awareness provider={new WebrtcProvider('test-room', doc)} />
    <App />
  </Provider>
);

export default memo(Container);
