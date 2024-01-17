import { App } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { DevtoolsOptions } from 'zustand/middleware';
import type { ProBuilderAppProps } from './App';
import Content from './App';
import type { AppContainerProps } from './AppContainer';
import { AppContainer } from './AppContainer';
import Provider from './Provider';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';
import { useStyle } from './style';

export type ProBuilderProps = ProBuilderAppProps &
  AppContainerProps &
  StoreUpdaterProps & {
    __EDITOR_STORE_DEVTOOLS__?: boolean | DevtoolsOptions;
  };

export const ProBuilder: FC<ProBuilderProps> = memo((props) => {
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

export { ProBuilderProvider } from './Provider';
export { AppContainer };
export type { StoreUpdaterProps };
