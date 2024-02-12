import { SortableTree } from '@ant-design/pro-editor';

import { message } from 'antd';
import { initialData } from './data';

export default () => (
  <div style={{ width: 340 }}>
    <SortableTree
      defaultTreeData={initialData}
      sortableRule={(data) => {
        // 只允许平级拖动
        const { activeNode, projected } = data;
        const sortable = activeNode?.depth === projected?.depth;

        if (!sortable) message.warning('只允许同级拖动排序');

        return sortable;
      }}
    />
  </div>
);
