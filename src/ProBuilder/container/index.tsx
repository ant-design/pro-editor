import { ConfigProvider } from '@ant-design/pro-editor';
import { App } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { DevtoolsOptions } from 'zustand/middleware';
import type { ProBuilderAppProps } from './App';
import Content from './App';
import Provider from './Provider';
import type { StoreUpdaterProps } from './StoreUpdater';
import StoreUpdater from './StoreUpdater';
import { useStyle } from './style';

export type ProBuilderProps = ProBuilderAppProps &
  StoreUpdaterProps & {
    __EDITOR_STORE_DEVTOOLS__?: boolean | DevtoolsOptions;
  };

export const ProBuilder: FC<ProBuilderProps> = memo((props) => {
  const { style, __EDITOR_STORE_DEVTOOLS__, editorRef, ...res } = props;
  const { styles } = useStyle();

  return (
    <HotkeysProvider initiallyActiveScopes={['pro-builder']}>
      <Provider devtoolOptions={__EDITOR_STORE_DEVTOOLS__}>
        <ConfigProvider>
          <App className={styles.app} style={style}>
            <Content {...res} />
          </App>
        </ConfigProvider>
        <StoreUpdater editorRef={editorRef} {...res} />
      </Provider>
    </HotkeysProvider>
  );
});

export { ProBuilderProvider } from './Provider';
export type { StoreUpdaterProps };
