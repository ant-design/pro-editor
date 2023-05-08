import type { TreeSelectProps as Props } from 'antd';
import { TreeSelect as _TreeSelect } from 'antd';
import type { FC, ReactNode } from 'react';

import { ConfigProvider } from '../ConfigProvider';

export type TreeSelectProps = Props & { children?: ReactNode };

export const TreeSelect: FC<TreeSelectProps> = (props) => (
  <ConfigProvider>
    <_TreeSelect {...props} />
  </ConfigProvider>
);

// @ts-ignore
TreeSelect.TreeNode = _TreeSelect.TreeNode;
