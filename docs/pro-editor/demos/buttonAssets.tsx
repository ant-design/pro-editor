import { ComponentAsset, ProBuilder } from '@ant-design/pro-editor';
import { buttonAssetParams } from './buttonAsset';

const ButtonComponentAsset = new ComponentAsset(buttonAssetParams);

export default () => (
  <ProBuilder
    componentAsset={ButtonComponentAsset}
    style={{ height: 600 }}
    __EDITOR_STORE_DEVTOOLS__={{ name: 'ButtonEditor' }}
  />
);
