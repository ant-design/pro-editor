import type { AppContainerProps } from '@ant-design/pro-editor';
import { AppContainer } from '@ant-design/pro-editor';
import { App } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { DevtoolsOptions } from 'zustand/middleware';

import type { ProEditorAppProps } from './App';
import Content from './App';
import Provider from './Provider';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';
import { useStyle } from './style';

export type ProEditorProps = ProEditorAppProps &
  AppContainerProps &
  StoreUpdaterProps & {
    __EDITOR_STORE_DEVTOOLS__?: boolean | DevtoolsOptions;
  };

export const ProEditor: FC<ProEditorProps> = memo((props) => {
  const { themeMode, theme, style, __EDITOR_STORE_DEVTOOLS__, editorRef, ...res } = props;
  const { styles } = useStyle();

  return (
    <HotkeysProvider initiallyActiveScopes={['pro-editor']}>
      <Provider devtoolOptions={__EDITOR_STORE_DEVTOOLS__}>
        <AppContainer themeMode={themeMode} theme={theme}>
          <App className={styles.app} style={style}>
            <Content {...res} />
          </App>
        </AppContainer>
        <StoreUpdater editorRef={editorRef} {...res} />
      </Provider>
    </HotkeysProvider>
  );
});

export { ProEditorProvider } from './Provider';
export type { StoreUpdaterProps };
