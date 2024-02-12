import type { TreeData } from '@ant-design/pro-editor';
import { IconPicker, SortableTree } from '@ant-design/pro-editor';
import { Input } from 'antd';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import type { MenuContent } from './data';
import { menuData } from './data';

const NodeRender = ({ node }) => {
  const [text, setText] = useState(node.content.name);

  return (
    <Flexbox horizontal align={'center'} gap={4}>
      <div>
        <IconPicker icon={node.content.icon} />
      </div>
      <Input
        size={'small'}
        value={text}
        id={node.id}
        tabIndex={10}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Flexbox>
  );
};

export default () => {
  const [treeData, setTreeData] = useState<TreeData<MenuContent>>(menuData);

  return (
    <div style={{ width: 340 }}>
      <SortableTree<MenuContent>
        treeData={treeData}
        onTreeDataChange={(data) => {
          console.log('变更：', data);
          setTreeData(data);
        }}
        renderContent={(node) => node.content && <NodeRender node={node} />}
      />
    </div>
  );
};
