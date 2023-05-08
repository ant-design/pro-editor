import type { RenderNodeProps, TreeData, UniqueIdentifier } from '../types';

export interface ControlledState {
  /**
   * 隐藏默认的添加按钮
   */
  hideAdd?: boolean;
  /**
   * 隐藏默认的删除按钮
   */
  hideRemove?: boolean;
  /**
   * 缩进宽度
   */
  indentationWidth?: number;
  /**
   * 选中 ID 变更回调
   */
  onSelectedIdsChange?: (selectedIds: UniqueIdentifier[]) => void;
}

/**
 * @title 组件状态
 */
export interface State extends ControlledState {
  /**
   * @title 树形数据
   */
  treeData: TreeData;
  /**
   * @title 选中的节点 ID 数组
   */
  selectedIds?: UniqueIdentifier[];
  /**
   * @title 激活的节点 ID
   */
  activeId?: UniqueIdentifier;
  /**
   * @title 拖拽悬浮的节点 ID
   */
  overId?: UniqueIdentifier;
  /**
   * @title 左侧偏移量
   */
  offsetLeft: number;
  /**
   * @title 当前位置信息
   */
  currentPosition?: {
    /**
     * @title 父节点 ID
     */
    parentId: UniqueIdentifier | null;
    /**
     * @title 悬浮节点 ID
     */
    overId: UniqueIdentifier;
  };
  /**
   * @title 树形数据改变回调函数
   * @param treeData - 改变后的树形数据
   */
  onTreeDataChange?: (treeData: TreeData) => void;
  /**
   * @title 渲染节点内容函数
   * @param node - 节点数据
   */
  renderContent: RenderNodeProps;
  /**
   * @title 渲染节点额外内容函数
   * @param node - 节点数据
   */
  renderExtra: RenderNodeProps;
}

export const initialDragState: Pick<
  State,
  'offsetLeft' | 'overId' | 'activeId' | 'currentPosition'
> = {
  offsetLeft: 0,
  overId: null,
  activeId: null,
  currentPosition: null,
};

export const initialState: State = {
  indentationWidth: 24,
  treeData: [],
  selectedIds: [],
  renderContent: undefined,
  renderExtra: undefined,
  hideAdd: false,
  hideRemove: false,
  ...initialDragState,
};
