import classNames from 'classnames';
import { forwardRef } from 'react';
import { useStyle } from './style';

export interface Props {
  children: React.ReactNode;
  columns?: number;
  style?: React.CSSProperties;
  className?: string;
  horizontal?: boolean;
  prefixCls?: string;
}

const List = forwardRef<HTMLUListElement, Props>(
  (
    { children, columns = 1, horizontal, style, className, prefixCls }: Props,
    ref,
  ) => {
    const { styles } = useStyle({ prefixCls, horizontal });

    const listClassName = classNames(styles.container, className);

    return (
      <ul
        ref={ref}
        style={
          {
            ...style,
            '--columns': columns,
          } as React.CSSProperties
        }
        className={listClassName}
      >
        {children}
      </ul>
    );
  },
);

export default List;
