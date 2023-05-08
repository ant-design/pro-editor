/**
 * iframe: 800
 */
import {
  ComponentAsset,
  PresenceEditor,
  ProEditor,
} from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';
import ReactJson from 'react-json-view';
import { Flexbox } from 'react-layout-kit';

import { demoAssets } from '../../ComponentAsset/demoAssets';

const assets = new ComponentAsset({
  ...demoAssets,
  ui: {
    ...demoAssets.ui,
    isStarterMode: () => false,
  },
});

export default () => {
  const [presence, setPresence] = useLocalStorageState<PresenceEditor>(
    'DEMO-PRO-EDITOR-PRESENCE',
  );
  return (
    <Flexbox>
      <ProEditor
        componentAsset={assets}
        presenceEditor={presence}
        onPresenceEditorChange={setPresence}
        style={{ height: 'calc(100vh - 100px)' }}
      />
      <Flexbox>
        当前视图状态：
        <ReactJson src={presence} />
      </Flexbox>
    </Flexbox>
  );
};
