/**
 * iframe: 600
 */
import { ComponentAsset, ProBuilder } from '@ant-design/pro-editor';

import { buttonAssetParams } from './buttonAsset';

const ButtonComponentAsset = new ComponentAsset(buttonAssetParams);

export default () => (
  <ProBuilder
    componentAsset={ButtonComponentAsset}
    style={{ height: '100vh' }}
    __EDITOR_STORE_DEVTOOLS__={{ name: 'ButtonEditor' }}
  />
);
