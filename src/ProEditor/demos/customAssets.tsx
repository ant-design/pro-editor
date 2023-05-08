/**
 * iframe: 600
 */
import { ComponentAsset, ProEditor } from '@ant-design/pro-editor';
import { demoAssets } from '../../ComponentAsset/demoAssets';

export default () => (
  <ProEditor
    componentAsset={
      new ComponentAsset({
        ...demoAssets,
        ui: {
          ...demoAssets.ui,
          isStarterMode: () => false,
        },
      })
    }
    style={{ height: '100vh' }}
    onCopy={(children) => {
      console.log('代码复制', children);
    }}
  />
);
