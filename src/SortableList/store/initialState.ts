import type {
  CreatorButtonProps,
  GetItemStyles,
  KeyManager,
  RenderActionProps,
  RenderItemProps,
  UniqueIdentifier,
} from '../type';
import { SortableListDispatchPayload } from './listDataReducer';

export type OnChange<T = any> = (values: T[], event: SortableListDispatchPayload) => void;

export interface State<T = any> {
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
  getItemStyles: () => ({}),
  actions: [],
};
