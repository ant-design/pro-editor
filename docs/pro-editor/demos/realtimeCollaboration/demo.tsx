/**
 * title: 实时协同
 * description: 打开多个窗口，点击 "Join" 加入协作
 */
import { Awareness } from '@ant-design/pro-editor';
import { Button, Divider, Input } from 'antd';
import { memo, useState } from 'react';
import { WebrtcProvider } from 'y-webrtc';
import { SessionForm } from './SessionForm';
import { Provider, createStore, doc, useStore } from './store';

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

const Container = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    setUser(values);
    setOpen(false);
  };

  return (
    <Provider createStore={createStore}>
      {user ? null : (
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Join
        </Button>
      )}
      <SessionForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {user ? <Awareness provider={new WebrtcProvider('test-room', doc)} user={user} /> : null}
      <App />
    </Provider>
  );
};

export default memo(Container);
