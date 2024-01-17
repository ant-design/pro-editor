import { useHotkeyManager } from '@/ProBuilder/hooks/useHotkeyManager';
import type { FC } from 'react';
import { CSSProperties, memo, ReactNode } from 'react';
import { shallow } from 'zustand/shallow';
import DefaultErrorBoundary from '../../ErrorBoundary';
import AssetEmpty from '../components/AssetEmpty';
import AssetStoreUpdater from '../components/AssetStoreUpdater';
import ConfigPanel from '../components/ConfigPanel';
import NavBar from '../components/NavBar';
import Stage from '../components/Stage';
import { useStore } from '../store';
import { useStyle } from './style';

export interface ProBuilderAppProps {
  /**
   * 替换logo
   */
  logo?: ReactNode;

  hideNavbar?: boolean;
  style?: CSSProperties;
  /**
   * 自定义错误兜底形态
   */
  ErrorBoundary?: FC;
  /**
   * 代码复制回调
   */
  onCopy?: (children: any) => void;
}

export const ProBuilder: FC<ProBuilderAppProps> = memo((props) => {
  const { logo, hideNavbar = true, style, ErrorBoundary = DefaultErrorBoundary, onCopy } = props;

  const [exportConfig, componentAsset, width, panelExpand] = useStore(
    (s) => [
      s.exportConfig,
      s.componentAsset,
      s.editorAwareness.panelSize.width,
      s.editorAwareness.panelExpand,
    ],
    shallow,
  );

  const { styles } = useStyle();

  // 注册快捷键
  useHotkeyManager();

  // 第一次渲染的时候 componentAsset 是不存在的，为避免面板模块报错，返回空状态组件
  if (!componentAsset) return <AssetEmpty />;

  const AssetProvider = componentAsset.AssetProvider;

  const children = (
    <div className={styles.main} style={style}>
      <div
        className={styles.left}
        style={{ maxWidth: panelExpand ? `calc(100vw - ${width}px)` : '100vw' }}
      >
        {hideNavbar ? null : <NavBar logo={logo} />}

        <Stage hideNavbar={hideNavbar} onCopy={onCopy} />
      </div>
      <ConfigPanel />
    </div>
  );

  return (
    <ErrorBoundary onExportConfig={exportConfig}>
      <AssetProvider createStore={() => componentAsset.componentStore}>
        {children}
        <AssetStoreUpdater />
      </AssetProvider>
    </ErrorBoundary>
  );
});

export default ProBuilder;
