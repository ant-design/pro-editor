import type { TreeData } from '@ant-design/pro-editor';
import { Input, SortableTree, useSortableTree } from '@ant-design/pro-editor';
import { useState } from 'react';

import { initialData } from './data';

interface DataContent {
  title: string;
}

const Content = ({ value, id }) => {
  const instance = useSortableTree();

  return (
    <Input
      value={value}
      onChange={(value) => {
        instance.updateNodeContent(id, { title: value });
      }}
    />
  );
};

export default () => {
  const [treeData, setTreeData] = useState<TreeData<DataContent>>(initialData);

  return (
    <div style={{ width: 340 }}>
      <SortableTree<DataContent>
        treeData={treeData}
        renderContent={(item) => <Content id={item.id} value={item.content?.title} />}
        onTreeDataChange={(data, event) => {
          console.log('数据：', data);
          console.log('事件：', event);
          setTreeData(data);
        }}
      />
    </div>
  );
};
