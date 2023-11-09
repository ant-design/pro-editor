import classNames from 'classnames';
import { createRef } from 'react';
import { getPrefixCls } from '../theme';
import CopyButton from './components/CopyButton';
import HighLighter from './components/HighLighter';
import LanguageTag from './components/LanguageTag';
import { useKeyDownCopyEvent } from './hooks/useKeyDownCopyEvent';
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
  /**
   * 高亮类型
   */
  type?: 'pure' | 'block';
  /**
   * 是否需要默认外层 wrapper
   */
  containerWrapper?: boolean;
  /**
   * 是否需默认展示语言种类
   */
  showLanguage?: boolean;
}

const HighlightBase: React.FC<HighlightProps> = (props) => {
  const {
    children,
    style,
    className,
    lineNumber = false,
    copyable = true,
    theme = THEME_LIGHT,
    language = 'tsx',
    prefixCls: customPrefixCls,
    showLanguage = true,
    type = 'block',
    onCopy,
  } = props;
  const prefixCls = getPrefixCls('highlight', customPrefixCls);
  const { styles } = useStyles({ prefixCls, theme, type });
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
        {showLanguage && language && (
          <LanguageTag prefixCls={prefixCls} theme={theme}>
            {language.toLowerCase()}
          </LanguageTag>
        )}
        <HighLighter
          lineNumber={lineNumber}
          language={language}
          theme={theme}
          prefixCls={prefixCls}
        >
          {children}
        </HighLighter>
      </div>
    </>
  );
};

export { HighlightBase };
