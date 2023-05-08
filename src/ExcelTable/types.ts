import type { OnDataChange, TableData } from './store';

/**
 * Store 状态机
 */

/**
 * 外部更新Props
 */
export interface StoreUpdaterProps {
  /**
   * @title 当前数据值
   */
  value?: TableData;
  /**
   * @title 初始数据值
   */
  defaultValue?: TableData;
  /**
   * @title 数据变化回调函数
   * @param data - 变化后的数据
   */
  onChange?: OnDataChange;
}

/**
 * 组件Props
 */
export interface ComponentProps {
  /**
   * @title 前缀 class 名称
   */
  prefixCls?: string;
  /**
   * @title class 名称
   */
  className?: string;
  /**
   * 工具条
   */
  toolbar?: false;
}

/**
 * 组件Props
 */
export interface ExcelTableProps extends StoreUpdaterProps, ComponentProps {}
