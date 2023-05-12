import type {
  CreatorButtonProps,
  KeyManager,
  RenderActionProps,
  RenderItemProps,
  UniqueIdentifier,
} from '../type';

export interface State<T = any> {
  /*
   * 值变化
   */
  onChange?: (values: T[]) => void;
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

export const initialState: State = {
  activeId: null,
  value: [],
  keyManager: {
    keys: [],
    id: 1, // 自增
  },
  compact: false,
  hideRemove: false,
  onChange: undefined,
  renderHeader: undefined,
  renderContent: undefined,
  actions: [],
  creatorButtonProps: {
    showInList: true,
    showInEmpty: true,
    creatorButtonText: '添加一列',
    record: undefined,
  },
};
