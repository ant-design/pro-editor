import { createStyles, cx, getStudioStylish } from '@/theme';
import { useMemoizedFn } from 'ahooks';
import isEqual from 'lodash.isequal';
import { memo } from 'react';
import { VariableSizeList } from 'react-window';
import { shallow } from 'zustand/shallow';

import { SortableTreeItem } from '../components';
import { dataFlattenSelector, projectedSelector, useStore } from '../store';

import { genUniqueId } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FlattenNode } from '../types';

interface TreeNodeProps {
  node: FlattenNode;
  virtualStyle?: React.CSSProperties;
}

const TreeNode = memo<TreeNodeProps>(({ node, virtualStyle }) => {
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
      virtualStyle={virtualStyle}
      onRemove={onRemove}
    />
  );
}, isEqual);

const useStyle = createStyles((props) => {
  const { token, css, prefixCls } = props;
  const common = getStudioStylish(props);

  const antCls = prefixCls;

  return {
    btnAdd: cx(
      `${antCls}-btn-add`,
      css`
        height: 24px;
        padding-block: 2px;
        margin-top: ${token.marginXXS}px;
      `,
      common.defaultButton,
    ),
  };
});

const TreeList = memo(() => {
  const [dispatchTreeData, hideAdd, virtual] = useStore(
    (s) => [s.dispatchTreeData, s.hideAdd, s.virtual],
    shallow,
  );
  const flattenData: FlattenNode[] = useStore(dataFlattenSelector, isEqual);
  const { styles } = useStyle();

  const { height = 800, itemHeight = () => 36, width = '100%' } = virtual || {};

  return (
    <>
      {virtual ? (
        <VariableSizeList
          itemCount={flattenData!.length}
          height={height}
          itemSize={itemHeight}
          itemData={flattenData}
          width={width}
        >
          {({ index, data, style }) => {
            const node = data[index];
            return <TreeNode node={node} virtualStyle={style} key={node.id} />;
          }}
        </VariableSizeList>
      ) : (
        <>
          {flattenData.map((node) => (
            <TreeNode key={node.id} node={node} />
          ))}
        </>
      )}
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
