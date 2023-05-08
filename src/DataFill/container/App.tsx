import { Tree } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import { useCallback } from 'react';
import { Flexbox } from 'react-layout-kit';
import type { DataFillAppProps, FillTreeNode } from '../types';

import { getPrefixCls } from '../../theme';
import TreeNode from '../components/TreeNode';
import { useStore } from '../store';

import { useStyle } from './style';

const { DirectoryTree } = Tree;

const App: FC<DataFillAppProps> = (props) => {
  const { prefixCls: customizePrefixCls, className } = props;

  const prefixCls = getPrefixCls('data-fill', customizePrefixCls);

  const { styles } = useStyle(prefixCls);

  const treeData = useStore((s) => s.fillTreeData);

  const titleRender = useCallback(
    (data: FillTreeNode<any>) => <TreeNode data={data} prefixCls={prefixCls} />,
    [],
  );

  return (
    <Flexbox className={classNames(prefixCls, className, styles.directory)}>
      <DirectoryTree
        treeData={treeData}
        selectable={false}
        titleRender={titleRender}
      />
    </Flexbox>
  );
};

export default App;
