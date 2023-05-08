import { CaretRightFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import type { CSSProperties, FC, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import useMergedState from 'use-merge-value';

import { getPrefixCls } from '../theme';

import { ConfigProvider } from '../ConfigProvider';

import { useStyles } from './style';

interface CollapseTitleProps {
  /**
   * 默认展开
   */
  defaultExpand?: boolean;
  /**
   * 受控展开
   */
  expand?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 展开回调
   * @param expand
   * @returns
   */
  onExpandChange?: (expand: boolean) => void;
  /**
   * 前缀
   */
  prefixCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 扩展部位渲染
   * @param expand
   * @returns
   */
  extra?: (expand: boolean) => ReactNode;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 内容
   */
  children?: ReactNode;
}

const CollapseTitle: FC<CollapseTitleProps> = ({
  defaultExpand = false,
  expand,
  onExpandChange,
  prefixCls: customizePrefixCls,
  title,
  children,
  className,
  extra,
}) => {
  const prefixCls = getPrefixCls('collapse-title', customizePrefixCls);

  const [showPanel, setCollapsed] = useMergedState(defaultExpand, {
    value: expand,
    onChange: onExpandChange,
  });

  const toggleCollapse = () => {
    setCollapsed(!showPanel);
  };

  const { styles } = useStyles({ showPanel, prefixCls, className });
  return (
    <ConfigProvider>
      <Flexbox className={styles.container}>
        <Flexbox
          direction={'horizontal'}
          distribution={'space-between'}
          align={'center'}
          className={styles.header}
          onClick={showPanel ? undefined : toggleCollapse}
        >
          <Flexbox
            direction={'horizontal'}
            gap={4}
            align={'center'}
            onClick={showPanel ? toggleCollapse : undefined}
            className={styles.title}
          >
            <CaretRightFilled
              style={{ fontSize: 10 }}
              rotate={showPanel ? 90 : 0}
            />
            <div>{title}</div>
          </Flexbox>
          {extra && extra(showPanel)}
        </Flexbox>
        {showPanel ? (
          <>
            <Divider style={{ margin: '4px 0 12px' }} dashed />
            {children}
          </>
        ) : null}
      </Flexbox>
    </ConfigProvider>
  );
};

export default CollapseTitle;
