import { createStyles, cx, getStudioStylish } from '@/theme';
import { PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button } from 'antd';
import isEqual from 'lodash.isequal';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { SortableTreeItem } from '../components';
import { dataFlattenSelector, projectedSelector, useStore } from '../store';

import { genUniqueId } from '../../utils';
import type { FlattenNode } from '../types';

interface TreeNodeProps {
  prefixCls: string;
  node: FlattenNode;
}

const TreeNode = memo<TreeNodeProps>(({ prefixCls, node }) => {
  const [activeId, indentationWidth, dispatchTreeData, hideRemove] = useStore(
    (s) => [s.activeId, s.indentationWidth, s.dispatchTreeData, s.hideRemove],
    shallow,
  );

  const projected = useStore(projectedSelector, shallow);
  const { id, children, collapsed, depth } = node;

  const onRemove = useMemoizedFn(() => dispatchTreeData({ type: 'removeNode', id }));

  return (
    <SortableTreeItem
      id={id}
      prefixCls={prefixCls}
      collapsed={Boolean(collapsed && children.length)}
      indentationWidth={indentationWidth}
      depth={id === activeId && projected ? projected.depth : depth}
      hideRemove={hideRemove}
      // 自定义渲染区

      showExtra={node.showExtra}
      // 交互操作
      onCollapse={
        children.length ? () => dispatchTreeData({ type: 'toggleCollapse', id }) : undefined
      }
      node={node}
      onRemove={onRemove}
    />
  );
}, isEqual);

const useStyle = createStyles((props, prefixCls: string) => {
  const { token, css } = props;
  const common = getStudioStylish(props);

  return {
    btnAdd: cx(
      'studio-btn-solid',
      `${prefixCls}-btn-add`,
      css`
        height: 24px;
        padding-block: 2px;
        margin-top: ${token.marginXXS}px;
      `,
      common.defaultButton,
    ),
  };
});

interface TreeListProps {
  prefixCls: string;
}

const TreeList = memo<TreeListProps>(({ prefixCls }) => {
  const [dispatchTreeData, hideAdd] = useStore(
    (s) => [s.dispatchTreeData, s.hideAdd, s.hideRemove],
    shallow,
  );
  const flattenData: FlattenNode[] = useStore(dataFlattenSelector, isEqual);
  const { styles } = useStyle(prefixCls);

  return (
    <>
      {flattenData.map((node) => (
        <TreeNode key={node.id} node={node} prefixCls={prefixCls} />
      ))}
      {hideAdd ? null : (
        <Button
          block
          size={'small'}
          className={styles.btnAdd}
          onClick={() => {
            const index = flattenData.length + 1;
            dispatchTreeData({
              type: 'addNode',
              node: { id: genUniqueId(index.toString()) },
            });
          }}
          icon={<PlusOutlined />}
        >
          添加一项
        </Button>
      )}
    </>
  );
});

export default TreeList;
