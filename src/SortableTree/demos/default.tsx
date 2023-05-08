import { SortableTree } from '@ant-design/pro-editor';

import { initialData } from './data';

export default () => (
  <div style={{ width: 340 }}>
    <SortableTree
      defaultTreeData={initialData}
      // __debug // 用于显示 Redux Devtools
    />
  </div>
);
