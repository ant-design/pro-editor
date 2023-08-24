import type {
  CreatorButtonProps,
  GetItemStyles,
  KeyManager,
  RenderActionProps,
  RenderItemProps,
  SortableListDispatchPayload,
  UniqueIdentifier,
} from '../type';

export type OnChange<T = any> = (values: T[], event: SortableListDispatchPayload) => void;

export interface SortableListState<T = any> {
  /*
   * 值变化
   */
  onChange?: OnChange;
  /**
   * 删除回调
   */
  onRemove?: (index: number) => void;
  /**
   * 当前选中项 ID
   */
  activeId?: UniqueIdentifier;
  /**
   * 字段管理
   */
  keyManager?: KeyManager;
  /**
   * 值
   */
  value?: T[];
  /**
   * 渲染内容区域
   */
  renderContent: RenderItemProps<T>;
  /**
   * 渲染额外区域
   */
  actions: RenderActionProps<T>;
  /**
   * 渲染可排序列表项样式
   */
  getItemStyles?: GetItemStyles;
  /**
   * 渲染头部区域
   */
  renderHeader: () => React.ReactNode;
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps;
  /**
   * 紧凑模式
   */
  compact?: boolean;
  /**
   * 隐藏
   */
  hideRemove?: boolean;
}
