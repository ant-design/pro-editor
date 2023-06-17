/**
 * iframe: 600
 */
import { ComponentAsset, ProEditor } from '@/index';
import { buttonAssetParams } from './buttonAsset';

const ButtonComponentAsset = new ComponentAsset(buttonAssetParams);

export default () => (
  <ProEditor
    componentAsset={ButtonComponentAsset}
    style={{ height: '100vh' }}
    __EDITOR_STORE_DEVTOOLS__={{ name: 'ButtonEditor' }}
  />
);
