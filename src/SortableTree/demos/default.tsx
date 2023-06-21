/**
 * title: 基本使用
 * description: 默认支持增加、删除、排序操作。
 */
import { SortableTree } from '@ant-design/pro-editor';

import { initialData } from './data';

export default () => (
  <div style={{ width: 340 }}>
    <SortableTree defaultTreeData={initialData} />
  </div>
);
