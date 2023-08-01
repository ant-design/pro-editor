export interface BoundBox {
  width: number;
  height: number;
}

export type SizeFollow = 'sketch' | 'self';

/**
 * 组件尺寸控制
 */
export interface ComponentSize extends Partial<BoundBox> {
  widthFollow?: SizeFollow;
  heightFollow?: SizeFollow;
}

export type VerticalType = 'top' | 'center' | 'bottom';
export type HorizontalType = 'left' | 'center' | 'right';

export interface Alignment {
  /**
   * 横向位置
   */
  vertical: VerticalType;
  /**
   * 纵向位置
   */
  horizontal: HorizontalType;
  /**
   * 是否翻转相应的坐标系
   */
  verticalFlipped?: boolean;
}

/**
 * C2D 组件预设值
 */
export interface C2DPresetValue {
  /**
   * 组件名 componentName
   */
  componentName: string;
  /**
   * 组件属性
   */
  props: any;
  /**
   * 对齐方式
   */
  alignment?: Alignment;
  /**
   * 组件大小
   */
  size?: ComponentSize;
  /**
   * 如果存在配置属性，那么存在这里持久化保存
   */
  config?: any;
}

export interface ReactNodeElement {
  $$__type: 'element';
  $$__body: C2DPresetValue;
}
