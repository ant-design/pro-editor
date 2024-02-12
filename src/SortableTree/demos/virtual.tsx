import { SortableTree } from '@ant-design/pro-editor';
import { treeData } from './data/virtual';

interface DataContent {
  name: string;
  visible: boolean;
  isLeaf: boolean;
}

const LayerManager = () => {
  return (
    <div style={{ width: 340 }}>
      <SortableTree<DataContent>
        treeData={treeData as any}
        renderContent={(item) => <div>{item.id}</div>}
        SHOW_STORE_IN_DEVTOOLS
        virtual={{
          // 滚动容器高度，必填
          height: 480,
          // 指定列表项高度，默认为 36，可选
          // itemHeight: (index: number) => number
        }}
        onTreeDataChange={(data) => {
          console.log('变更：', data);
        }}
      />
    </div>
  );
};
export default LayerManager;
