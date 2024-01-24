/**
 * iframe: 800
 */
import { demoAssets } from '@/ComponentAsset/demoAssets';
import { AwarenessEditor, ComponentAsset, ProBuilder } from '@/index';
import { Highlight } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';
import { Flexbox } from 'react-layout-kit';

const assets = new ComponentAsset(demoAssets);

export default () => {
  const [presence, setPresence] = useLocalStorageState<AwarenessEditor>('DEMO-PRO-EDITOR');

  return (
    <Flexbox>
      <ProBuilder
        componentAsset={assets}
        editorAwareness={presence}
        onEditorAwarenessChange={setPresence}
        style={{ height: 'calc(100vh - 100px)' }}
      />
      <Flexbox>
        当前视图状态：
        <Highlight>{JSON.stringify(presence, null, 2)}</Highlight>
      </Flexbox>
    </Flexbox>
  );
};
