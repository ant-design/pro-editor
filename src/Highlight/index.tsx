import { Loading3QuartersOutlined as Loading } from '@ant-design/icons';
import classNames from 'classnames';
import { createRef } from 'react';
import { Center } from 'react-layout-kit';
import { getPrefixCls } from '../theme';
import CopyButton from './components/CopyButton';
import Highlighter from './components/HighLighter';
import { useKeyDownCopyEvent } from './hooks/useKeyDownCopyEvent';
import { useShiki } from './hooks/useShiki';
import { useStyles } from './style';
import { THEME_LIGHT, ThemeType } from './theme';

export interface HighlightProps {
  /**
   * @description 样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description className 类名
   * @ignore
   */
  className?: string;
  /**
   * @description 类名前缀
   * @ignore
   */
  prefixCls?: string;
  /**
   * @title 指定语言
   * @description 指定语言
   * @renderType select
   * @default "typescript"
   */
  language: string;
  /**
   * @title 主题
   * @description 主题颜色, dark 黑色主题，light 白色主题
   * @default "light"
   */
  theme?: ThemeType;
  /**
   * @title 高亮内容
   * @description 高亮内容
   */
  children?: any;
  /**
   * @title 是否使用要使用行号
   * @description 是否需要展示代码块左侧的行号
   * @default false
   */
  lineNumber?: boolean;
  /**
   * @title 是否展示复制按钮
   * @description 是否需要展示复制按钮
   * @default true
   */
  copyable?: boolean;
  /**
   * @title 复制按钮点击后回调
   */
  onCopy?: (children: any) => void;
}

const Highlight: React.FC<HighlightProps> = (props) => {
  const {
    children,
    style,
    className,
    lineNumber = false,
    copyable = true,
    theme = THEME_LIGHT,
    language,
    prefixCls: customPrefixCls,
    onCopy,
  } = props;

  const prefixCls = getPrefixCls('highlight', customPrefixCls);
  const { styles, theme: globalTheme } = useStyles({ prefixCls, theme, lineNumber });
  const { error, loading, renderShiki } = useShiki(language, theme);
  const codeRef = createRef<HTMLDivElement>();
  useKeyDownCopyEvent(codeRef, onCopy);

  return (
    <>
      <div
        ref={codeRef}
        tabIndex={-1}
        style={style}
        className={classNames(styles.container, className)}
      >
        {copyable && (
          <CopyButton prefixCls={prefixCls} onCopy={onCopy} theme={theme} content={children} />
        )}
        {loading ? (
          <Center className={styles.loading} gap={8} horizontal>
            <Loading spin style={{ color: globalTheme.colorTextTertiary }} />
            Highlighting...
          </Center>
        ) : error ? (
          <Highlighter
            lineNumber={lineNumber}
            language={language}
            theme={theme}
            prefixCls={prefixCls}
          >
            {children}
          </Highlighter>
        ) : (
          <div
            className={classNames(styles.shiki)}
            dangerouslySetInnerHTML={{
              __html: renderShiki(children) || '',
            }}
          />
        )}
      </div>
    </>
  );
};

export { Highlight };
