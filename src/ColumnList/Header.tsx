import { ColumnItemList, createStyles, css } from '@ant-design/pro-editor';
import { cx } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyle = createStyles(({ token }, prefixCls) => {
  return {
    content: cx(
      `${prefixCls}-content`,
      css`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `,
    ),
    header: cx(
      `${prefixCls}-header`,
      css`
        color: ${token.colorTextTertiary};
        padding-left: 8px;
      `,
    ),
  };
});

interface HeaderProps {
  prefixCls: string;
  columns: ColumnItemList<any>;
}
export const Header = memo<HeaderProps>(({ prefixCls, columns }) => {
  const { styles } = useStyle(prefixCls);

  return (
    <Flexbox horizontal align={'center'} gap={4}>
      {columns.map((item, index) => (
        <div key={`${item.dataIndex}-${index}`} className={cx(styles.content, styles.header)}>
          {item.title}
        </div>
      ))}
    </Flexbox>
  );
});
