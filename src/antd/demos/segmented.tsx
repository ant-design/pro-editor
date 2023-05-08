import { Segmented } from '@ant-design/pro-editor';
import { Divider } from 'antd';
import { useState } from 'react';

enum TabKey {
  canvas,
  code,
}

const tabsList = [
  { label: '画布', value: TabKey.canvas },
  { label: '代码', value: TabKey.code },
];

export default () => {
  const [tabKey, setTabKey] = useState(TabKey.canvas);

  return (
    <div>
      <Segmented<TabKey>
        value={tabKey}
        options={tabsList}
        onChange={setTabKey}
      />
      {tabKey === TabKey.canvas && <div>canvas</div>}
      {tabKey === TabKey.code && <div>code</div>}
      <Divider />
      <Segmented<TabKey>
        size={'small'}
        value={tabKey}
        options={tabsList}
        onChange={setTabKey}
      />
      {tabKey === TabKey.canvas && <div>canvas</div>}
      {tabKey === TabKey.code && <div>code</div>}
    </div>
  );
};
