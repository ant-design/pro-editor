import { CSSProperties, FC } from 'react';

export interface ColumnItemOption {
  label: string;
  value: string | number;
}

export interface ColumnCustomRenderProps<T> {
  item: T;
  value: any;
  onChange: (value: any) => void;
  column: ColumnItem<T>;
  style: CSSProperties;
  index: number;
}

export interface ColumnItem<T = any> {
  /** 栏标题 */
  title?: React.ReactNode;
  /**
   * 字段类型
   */
  type?: 'select' | 'input' | 'custom';
  /**
   * 选项值
   */
  options?: ColumnItemOption[];
  /**
   * 提示
   */
  placeholder?: string;
  /**
   * 初始值
   */
  initialValue?: T;
  /**
   * 字段引用
   */
  dataIndex?: string;
  /**
   * 唯一键值
   */
  key?: string;
  /**
   * 自定义渲染
   */
  render?: FC<ColumnCustomRenderProps<T>>;
  /**
   * 栏目宽度
   */
  width?: number | string;
  multiple?: boolean;
}

export type ColumnItemList<T> = ColumnItem<T>[];
