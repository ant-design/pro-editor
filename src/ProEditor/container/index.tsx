import type { AppContainerProps } from '@ant-design/pro-editor';
import { AppContainer } from '@ant-design/pro-editor';
import { App } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import type { ProEditorAppProps } from './App';
import Content from './App';
import Provider from './Provider';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';
import { useStyle } from './style';

export type ProEditorProps<Config = any> = ProEditorAppProps &
  AppContainerProps &
  StoreUpdaterProps<Config>;

export const ProEditor: FC<ProEditorProps> = memo((props) => {
  const { themeMode, theme, showEditorDevtools, editorRef, ...res } = props;
  const { styles } = useStyle();

  return (
    <Provider showDevtools={showEditorDevtools}>
      <AppContainer themeMode={themeMode} theme={theme}>
        <App className={styles.app}>
          <Content {...res} />
        </App>
      </AppContainer>
      <StoreUpdater editorRef={editorRef} {...res} />
    </Provider>
  );
});

export { ProEditorProvider } from './Provider';
export type { StoreUpdaterProps };
