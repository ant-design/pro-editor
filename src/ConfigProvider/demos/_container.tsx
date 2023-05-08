import { AppContainer } from '@ant-design/pro-editor';
import { Divider, Space, Switch } from 'antd';
import { useState } from 'react';
import { ThemeAppearance } from '../../theme';

export const Container = ({ children, appearance }) => (
  <AppContainer appearance={appearance}>{children}</AppContainer>
);

export const Controller = ({ children }) => {
  const [appearance, setAppearance] = useState<ThemeAppearance>('light');
  return (
    <>
      <Space>
        <Switch
          size={'small'}
          checked={appearance === 'dark'}
          onChange={(e) => {
            setAppearance(e ? 'dark' : 'light');
          }}
        />
        暗色模式
      </Space>
      <Divider />
      <Container appearance={appearance}>{children}</Container>
    </>
  );
};
