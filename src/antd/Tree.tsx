import type { TreeProps as Props } from 'antd';
import { Tree as _Tree } from 'antd';
import type { FC, ReactNode } from 'react';

import { ConfigProvider } from '../ConfigProvider';

export type TreeProps = Props & { children?: ReactNode };

export const Tree: FC<TreeProps> = (props) => {
  return (
    <ConfigProvider>
      <_Tree {...props} />
    </ConfigProvider>
  );
};

// @ts-ignore
Tree.TreeNode = _Tree.TreeNode;
