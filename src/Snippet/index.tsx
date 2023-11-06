import HighLighter from '@/Highlight/components/HighLighter';
import CopyButton from '@/components/CopyButton';
import Spotlight from '@/components/Spotlight';
import { useThemeMode } from 'antd-style';
import { memo } from 'react';
import { DivProps } from 'react-layout-kit';
import { getPrefixCls } from '..';
import { useStyles } from './style';

export interface SnippetProps extends DivProps {
  /**
   * @description The content to be displayed inside the Snippet component
   */
  children: string;
  /**
   * @description Whether the Snippet component is copyable or not
   * @default true
   */
  copyable?: boolean;
  /**
   * @description The language of the content inside the Snippet component
   * @default 'tsx'
   */
  language?: string;
  /**
   * @description Whether add spotlight background
   * @default false
   */
  spotlight?: boolean;
  /**
   * @description The symbol to be displayed before the content inside the Snippet component
   */
  symbol?: string;
  /**
   * @description The type of the Snippet component
   * @default 'ghost'
   */
  type?: 'ghost' | 'block';

  prefixCls?: string;
}

const Snippet = memo<SnippetProps>((props) => {
  const {
    symbol = '$',
    language = 'tsx',
    children,
    copyable = true,
    prefixCls: customPrefixCls,
    type = 'ghost',
    spotlight,
    className,
    ...rest
  } = props;
  const prefixCls = getPrefixCls('snippet', customPrefixCls);
  const { isDarkMode } = useThemeMode();

  const { styles, cx } = useStyles({
    type,
    prefixCls,
  });
  return (
    <div className={cx(styles.container, className)} {...rest}>
      {spotlight && <Spotlight />}
      <HighLighter language={language} prefixCls={prefixCls} theme={isDarkMode ? 'dark' : 'light'}>
        {[symbol, children].filter(Boolean).join(' ')}
      </HighLighter>
      {copyable && <CopyButton content={children} />}
    </div>
  );
});

export { Snippet };
