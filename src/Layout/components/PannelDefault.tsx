import { DraggablePanel, TabsProps } from '@ant-design/pro-editor';
import { Size } from 're-resizable';
import { ReactNode } from 'react';
import { getPrefixCls } from '../../theme';
import { useStyle } from './../style';

interface PannelSettings {
  children: ReactNode | ReactNode[];
  direction?: 'horizontal' | 'vertical';
  tabs?: TabsProps;
  icon?: ReactNode;
  extra?: ReactNode;
  hide?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  style?: React.CSSProperties;
  className?: string;
}

const PannelDefault = (props: PannelSettings & { index: number }) => {
  const prefixCls = getPrefixCls('layout');
  const { styles, cx } = useStyle(prefixCls);

  const getPannelProps = (
    index: number,
  ):
    | {
        placement: 'left' | 'right' | 'bottom';
        className?: string;
        maxWidth?: number;
        maxHeight?: number;
        defaultSize?: Partial<Size>;
      }
    | false => {
    switch (['left', 'right', 'bottom', 'center'][index]) {
      case 'left':
        return {
          placement: 'left',
          className: styles.leftPannel,
          maxWidth: 500,
          defaultSize: {
            width: '200',
          },
        };
      case 'right':
        return {
          placement: 'right',
          className: styles.rightPannel,
          maxWidth: 500,
          defaultSize: {
            width: '200',
          },
        };
      case 'bottom':
        return {
          placement: 'bottom',
          maxHeight: 400,
          defaultSize: {
            height: '100',
          },
        };
      case 'center':
        return false;
      default:
        return false;
    }
  };

  const {
    children = '',
    className,
    style,
    minHeight = 100,
    minWidth = 100,
    index = 0,
    ...rest
  } = props || {};
  const pannelProps = getPannelProps(index);
  if (!pannelProps) {
    return (
      <div className={cx(styles.pannel, styles.centerPannel)}>
        <div className={cx(className)}>{children}</div>
      </div>
    );
  }
  const { placement, className: pannelClassName } = pannelProps;
  return (
    <DraggablePanel
      expandable={false}
      style={{ border: 'none', ...style }}
      placement={placement}
      minHeight={minHeight}
      minWidth={minWidth}
      {...pannelProps}
      {...rest}
    >
      <div className={cx(styles.pannel, pannelClassName, className)}>{children}</div>
    </DraggablePanel>
  );
};

export { PannelDefault };

export type { PannelSettings };
