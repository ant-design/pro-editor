import type { UniqueIdentifier } from '@dnd-kit/core';
import { AnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useClickAway } from 'ahooks';
import type { CSSProperties, FC, HTMLAttributes } from 'react';
import { memo, useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { createStyles } from '../../../theme';

import { CollapseAction, DeleteAction, HandleAction } from '@/ActionIcon';

import { useStore } from '../../store';
import { FlattenNode } from '../../types';
import { iOS } from '../../utils/utils';

const useStyles = createStyles(
  ({ css, cx, prefixCls, token }, { collapsed }: { collapsed: boolean }) => {
    const prefix = `${prefixCls}-${token.editorPrefix}-node`;
    return {
      // 透出给组件层面拼接使用
      editorPrefix: token.editorPrefix,
      container: cx(
        prefix,
        `${prefix}-indicator`,
        css`
          margin-bottom: 4px;
          padding-left: 12px;

          &:hover {
            .${prefix}-handle, .${prefix}-remove {
              opacity: 1;
            }
          }
        `,
      ),
      deleteAction: cx(
        `${prefix}-remove`,
        css`
          opacity: 0;
        `,
      ),
      collapseAction: css`
        svg {
          transform: ${collapsed ? 'rotate(-90deg)' : ''};
          transition: transform 250ms ease;
        }
      `,
      extra: cx(
        `${prefix}-extra`,
        css`
          margin-bottom: 8px;
        `,
      ),
      handle: css`
        position: absolute;
        left: -13px;
        opacity: 0;
      `,
    };
  },
);

export interface TreeItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'id'> {
  /**
   * @title 子节点数量
   */
  childCount?: number;
  /**
   * @title 是否是 overlay 对象
   */
  clone?: boolean;
  /**
   * @title 是否已折叠
   */
  collapsed?: boolean;
  /**
   * @title 是否已选中
   */
  selected?: boolean;
  /**
   * @title 节点深度
   */
  depth: number;
  /**
   * @title 是否禁止选中
   */
  disableSelection?: boolean;
  /**
   * @title 缩进宽度
   */
  indentationWidth: number;
  /**
   * @title 唯一标识符
   */
  id: UniqueIdentifier;
  /**
   * @title 折叠事件回调函数
   */
  onCollapse?: () => void;
  /**
   * @title 移除事件回调函数
   */
  onRemove?: () => void;
  /**
   * @title 节点数据
   */
  node: FlattenNode;
  /**
   * @title 是否展示更多
   */
  showExtra?: boolean;
  /**
   * @title 是否隐藏移除按钮
   */
  hideRemove?: boolean;
  /**
   * 虚拟滚动添加样式
   */
  virtualStyle?: CSSProperties;
}

const animateLayoutChanges: AnimateLayoutChanges = ({ isSorting, wasDragging }) =>
  isSorting || wasDragging ? false : true;

const TreeItem: FC<TreeItemProps> = memo(
  ({
    childCount,
    clone,
    depth,
    disableSelection = iOS,
    collapsed,
    indentationWidth: _indentationWidth,
    onCollapse,
    onRemove,
    style,
    id,
    showExtra,
    hideRemove,
    node,
    virtualStyle,
    ...props
  }) => {
    const { styles, cx, prefixCls: antCls } = useStyles({ collapsed });
    const prefix = `${antCls}-${styles.editorPrefix}-node`;
    const prefixCls = `${antCls}-${styles.editorPrefix}`;

    const [
      indentationWidth,
      selected,
      Content,
      Extra,
      withKeyboardSelectNode,
      deselectedNode,
      disableDrag,
    ] = useStore(
      (s) => [
        s.indentationWidth,
        s.selectedIds.includes(id),
        s.renderContent,
        s.renderExtra,
        s.withKeyboardSelectNode,
        s.deselectedAll,
        s.disableDrag,
      ],
      shallow,
    );

    const extraPanelVisible = showExtra && !clone;

    const containerRef = useRef(document.getElementsByClassName(prefixCls).item(0));

    const {
      isDragging: ghost,
      isSorting: disableInteraction,
      listeners,
      attributes,
      setDraggableNodeRef,
      setDroppableNodeRef,
      transform,
      transition,
    } = useSortable({
      id,
      animateLayoutChanges,
    });

    useClickAway(() => {
      deselectedNode();
    }, [containerRef]);

    return (
      <>
        <li
          ref={setDroppableNodeRef}
          className={cx(
            styles.container,
            clone && `${prefix}-clone`,
            ghost && `${prefix}-ghost`,
            selected && !clone && `${prefix}-selected`,
            disableSelection && 'disableSelection',
          )}
          style={
            {
              pointerEvents: disableInteraction ? 'none' : undefined,
              '--spacing': `${indentationWidth * depth + (disableDrag ? 0 : 13)}px`,

              transform: CSS.Translate.toString(transform),
              transition,
              ...virtualStyle,
            } as CSSProperties
          }
          onClick={(e) => {
            withKeyboardSelectNode(e, id);
          }}
          {...props}
        >
          <div className={`${prefix}-body`} ref={setDraggableNodeRef} style={style}>
            {disableDrag ? null : (
              <HandleAction
                {...listeners}
                {...attributes}
                className={cx(`${prefix}-handle`, clone ? undefined : styles.handle)}
                style={{ width: 12 }}
              />
            )}
            {onCollapse && (
              <CollapseAction
                onClick={(e) => {
                  e.stopPropagation();
                  onCollapse();
                }}
                className={styles.collapseAction}
              />
            )}
            <span className={`${prefix}-content`}>{Content ? <Content {...node} /> : id}</span>
            {!hideRemove && !clone && onRemove && (
              <DeleteAction onClick={onRemove} title={'删除此项'} className={styles.deleteAction} />
            )}
            {clone && childCount && childCount > 1 ? (
              <span className={`${prefix}-count`}>{childCount}</span>
            ) : null}
          </div>
          {extraPanelVisible ? (
            <div className={styles.extra}>{Extra && <Extra {...node} />}</div>
          ) : null}
        </li>
      </>
    );
  },
);

export default TreeItem;
