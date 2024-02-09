import HighLighter from '@/Highlight/components/HighLighter';
import CopyButton from '@/components/CopyButton';
import Spotlight from '@/components/Spotlight';
import { ConfigProvider } from '@ant-design/pro-editor';
import { useThemeMode } from 'antd-style';
import { memo } from 'react';
import { DivProps } from 'react-layout-kit';
import { useStyles } from './style';

export interface SnippetProps extends DivProps {
  /**
   * @description 内容区域
   */
  children: string;
  /**
   * @description 是否支持可复制的能力
   * @default true
   */
  copyable?: boolean;
  /**
   * @description 指定渲染的语言类型
   * @default 'tsx'
   */
  language?: string;
  /**
   * @description 是否添加聚光灯背景
   * @default false
   */
  spotlight?: boolean;
  /**
   * @description 开头渲染的符号标志
   */
  symbol?: string;
  /**
   * @description 组件的渲染类型
   * @default 'ghost'
   */
  type?: 'ghost' | 'block';
}

const BaseSnippet = memo<SnippetProps>((props) => {
  const {
    symbol = '$',
    language = 'tsx',
    children,
    copyable = true,
    type = 'ghost',
    spotlight,
    className,
    ...rest
  } = props;

  const { isDarkMode } = useThemeMode();
  const { styles, cx } = useStyles({
    type,
  });

  return (
    <div className={cx(styles.container, className)} {...rest}>
      {spotlight && <Spotlight />}
      <HighLighter language={language} theme={isDarkMode ? 'dark' : 'light'} shiki>
        {symbol ? [symbol, children].join(' ') : children}
      </HighLighter>
      {copyable && <CopyButton content={children} />}
    </div>
  );
});

const Snippet = (props: SnippetProps) => {
  return (
    <ConfigProvider>
      <BaseSnippet {...props} />
    </ConfigProvider>
  );
};

export { Snippet };
