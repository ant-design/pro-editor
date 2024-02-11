/**
 * iframe: 600
 */
import { demoAssets } from '@/ComponentAsset/demoAssets';
import { ComponentAsset, ProBuilder } from '@ant-design/pro-editor';

export default () => (
  <ProBuilder
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
  />
);
