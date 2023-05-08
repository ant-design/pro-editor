import { Resizable } from 're-resizable';
import { useEffect, useState } from 'react';
import { getPrefixCls } from '../theme';
import CodeBox from './components/CodeBox';
import { useStyle } from './style';

export interface CodeBoxItem {
  /**
   * 代码块数据
   */
  data: string;
  /**
   * 代码块标题
   */
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DraggableCodeBoxProps {
  /**
   * @description 自定义前缀
   * @ignore
   */
  prefixCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 默认高度
   */
  defaultHeight?: number;
  /**
   * 代码块列表
   */
  items: CodeBoxItem[];
}

export const DraggableCodeBox: React.FC<DraggableCodeBoxProps> = (props) => {
  const {
    items,
    defaultHeight = 184,
    prefixCls: customPrefixCls,
    className,
  } = props;
  const prefixCls = getPrefixCls('draggable-codebox', customPrefixCls);
  const [height, setHeight] = useState(defaultHeight);
  const [open, setOpen] = useState(true);

  const handleOpenBtn = () => {
    if (open) {
      setHeight(102);
    } else {
      setHeight(defaultHeight);
    }
  };

  const { styles, cx } = useStyle(prefixCls);

  useEffect(() => {
    if (height === 102) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [height]);

  if (items.length === 0) return;

  return (
    <Resizable
      className={cx(styles.codeResize, className)}
      minWidth={'100%'}
      maxWidth={'100%'}
      maxHeight={'100%'}
      minHeight={'102px'}
      size={{
        width: '100%',
        height: `${height}px`,
      }}
      onResizeStop={(e, direction, ref, d) => {
        setHeight(height + d.height);
      }}
    >
      {items.map((item: CodeBoxItem, index: number) => {
        return (
          <CodeBox
            prefixCls={prefixCls}
            key={item.title}
            codeBoxData={item.data}
            footerShow={index > 0}
            title={item.title}
            open={open}
            handleOpenBtn={handleOpenBtn}
          />
        );
      })}
    </Resizable>
  );
};
