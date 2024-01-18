import type { NumberSize, Size } from 're-resizable';
import type { CSSProperties, FC, ReactNode } from 'react';
import { memo } from 'react';
import type { Props as RndProps } from 'react-rnd';

import { withProvider } from '..';
import { FixMode } from './FixMode';
import { FloatMode } from './FloatMode';

export interface DraggablePanelProps {
  /**
   * 位置，
   * 使用固定模式或者浮动窗口
   */
  mode?: 'fixed' | 'float';

  /**
   * 固定模式下面板的朝向，默认放置在右侧
   * @default right
   */
  placement?: 'right' | 'left' | 'top' | 'bottom';

  /**
   * 最小宽度
   */
  minWidth?: number;
  /**
   * 最小高度
   */
  minHeight?: number;
  /**
   * 最大宽度
   */
  maxWidth?: number;
  /**
   * 最大高度
   */
  maxHeight?: number;
  /**
   * 控制可缩放区域
   */
  resize?: RndProps['enableResizing'];
  /**
   * 面板尺寸
   *
   */
  size?: Partial<Size>;
  onSizeChange?: (delta: NumberSize, size?: Size) => void;
  /**
   * 当用户在拖拽过程中触发
   * @param delta
   * @param size
   */
  onSizeDragging?: (delta: NumberSize, size?: Size) => void;
  /**
   * 是否可展开
   * @default true
   */
  expandable?: boolean;
  /**
   * 当前是否是展开态
   */
  isExpand?: boolean;
  /**
   * 展开是否可以变更
   * @param expand
   */
  onExpandChange?: (expand: boolean) => void;
  /**
   * 面板位置
   * 受控模式
   */
  position?: RndProps['position'];
  /**
   * 面板默认尺寸
   * 固定模式下： width 320px height 100%
   * 浮动模式下：width 320px height 400px
   */
  defaultSize?: Partial<Size>;
  /**
   * 面板默认位置悬浮模式下有效
   * @default [100,100]
   */
  defaultPosition?: RndProps['position'];
  /**
   * 位置变更回调
   */
  onPositionChange?: (position: RndProps['position']) => void;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 类名
   */
  className?: string;
  /**
   * 内容
   */
  children: ReactNode;
}

const Draggable: FC<DraggablePanelProps> = memo(
  ({
    children,
    className,
    mode,
    placement,
    resize,
    style,
    position,
    onPositionChange,
    size,
    defaultSize,
    defaultPosition,
    minWidth,
    minHeight,
    maxHeight,
    maxWidth,
    onSizeChange,
    onSizeDragging,
    expandable = true,
    isExpand,
    onExpandChange,
  }) => {
    switch (mode) {
      case 'fixed':
      default:
        return (
          <FixMode
            // 尺寸
            size={size}
            defaultSize={defaultSize}
            onSizeDragging={onSizeDragging}
            onSizeChange={onSizeChange}
            minHeight={minHeight}
            minWidth={minWidth}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            // 缩放
            resize={resize}
            onExpandChange={onExpandChange}
            expandable={expandable}
            isExpand={isExpand}
            className={className}
            placement={placement}
            style={style}
          >
            {children}
          </FixMode>
        );
      case 'float':
        return (
          <FloatMode
            // 坐标
            defaultPosition={defaultPosition}
            position={position}
            onPositionChange={onPositionChange}
            // 尺寸
            minHeight={minHeight}
            minWidth={minWidth}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            defaultSize={defaultSize}
            size={size}
            onSizeDragging={onSizeDragging}
            onSizeChange={onSizeChange}
            // 缩放
            resize={resize}
            canResizing={resize !== false}
            className={className}
            style={style}
          >
            {children}
          </FloatMode>
        );
    }
  },
);

const WithProviderDraggable: FC<DraggablePanelProps> = withProvider(Draggable);

export { WithProviderDraggable as Draggable };
