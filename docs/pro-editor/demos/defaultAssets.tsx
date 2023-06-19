/**
 * iframe: 600
 */
import { demoAssets } from '@/ComponentAsset/demoAssets';
import { ComponentAsset, ProEditor } from '@ant-design/pro-editor';

export default () => (
  <ProEditor
    componentAsset={
      new ComponentAsset({
        ...demoAssets,
        storeOptions: {
          devtools: true,
        },
      })
    }
    style={{ height: '100vh' }}
    onCopy={(children) => {
      console.log('代码复制', children);
    }}
    themeMode={'dark'}
  />
);
