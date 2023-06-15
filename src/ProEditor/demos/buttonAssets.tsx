/**
 * iframe: 600
 */
import { ComponentAsset, ProEditor } from '@ant-design/pro-editor';
import { buttonAssetParams } from './buttonAsset';

const ButtonComponentAsset = new ComponentAsset(buttonAssetParams);

export default () => (
  <ProEditor
    componentAsset={ButtonComponentAsset}
    style={{ height: '100vh' }}
    __STORE_DEVTOOLS__={{ name: 'ButtonEditor' }}
  />
);
