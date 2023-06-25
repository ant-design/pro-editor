/**
 * title: 禁用拖拽
 */
import { SortableTree } from '@ant-design/pro-editor';

import { initialData } from './data';

export default () => (
  <div style={{ width: 340 }}>
    <SortableTree defaultTreeData={initialData} disableDrag />
  </div>
);
