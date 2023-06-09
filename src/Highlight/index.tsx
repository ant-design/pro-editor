/**
 * 高亮能力基于highlight.js 的语法解析能力 https://highlightjs.org/
 * 听说过的还算有名的语言放在langugaes中了，需要新增语言时在languages文件夹中添加并import使用，加入到 languageMap中
 * 如果没有在 https://github.com/highlightjs/highlight.js/tree/master/src/languages 中查找是否支持，然后添加
 * 优先支持主流语言，没有import在代码中使用的不会打包
 */
import classNames from 'classnames';
import { createRef } from 'react';
import { getPrefixCls } from '../theme';
import CopyButton from './components/CopyButton';
import Highlighter from './components/Highlighter';
import { LanguageType } from './hooks/language';
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
   * @description 指定语言，目前支持 javascript,typescript,css,json,markdown,xml,yaml
   * @renderType select
   * @default "typescript"
   */
  language?: LanguageType;
  /**
   * @title 主题
   * @description 主题颜色, dark 黑色主题，light 白色主题
   * @default "light"
   */
  theme?: ThemeType;
  /**
   * @title 代码块高度
   * @description 指定代码块高度，用于需要控制代码块高度固定的场景
   */
  height?: number | string;
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
  const { styles } = useStyles(prefixCls);
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
        <Highlighter
          lineNumber={lineNumber}
          language={language}
          theme={theme}
          prefixCls={prefixCls}
        >
          {children}
        </Highlighter>
      </div>
    </>
  );
};

export { Highlight };
