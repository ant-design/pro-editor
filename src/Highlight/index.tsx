/**
 * 高亮能力基于highlight.js 的语法解析能力 https://highlightjs.org/
 * 听说过的还算有名的语言放在langugaes中了，需要新增语言时在languages文件夹中添加并import使用，加入到 languageMap中
 * 如果没有在 https://github.com/highlightjs/highlight.js/tree/master/src/languages 中查找是否支持，然后添加
 * 优先支持蚂蚁主流语言，没有import在代码中使用的不会打包
 */
import hljs from 'highlight.js/lib/core';
import { createRef, isValidElement, useEffect, useState } from 'react';
import { default as javascript, default as jsx } from './languages/javascript';
// tsx 本质上也是采用typescript进行解析，hljs做了支持
import css from './languages/css';
import java from './languages/java';
import json from './languages/json';
import markdown from './languages/markdown';
import { default as tsx, default as typescript } from './languages/typescript';
import xml from './languages/xml';
import yaml from './languages/yaml';

import classNames from 'classnames';
import { getPrefixCls } from '../theme';
import HighlightCell from './HighlightCell';
import JsonView from './JsonView';

import { useStyles } from './style';

import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { customRule } from './customRule';
import { useKeyDownCopyEvent } from './useKeyDownCopyEvent';

// 目前支持的语言列表
export const languageMap = {
  javascript,
  typescript,
  css,
  json,
  markdown,
  xml,
  yaml,
  tsx,
  jsx,
  java,
};

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

// 主题类型
const tuple = <T extends string[]>(...args: T) => args;
const ThemeTypes = tuple(THEME_DARK, THEME_LIGHT);
export type ThemeType = (typeof ThemeTypes)[number];

// 支持的语言
const supportedLanguages = Object.keys(
  languageMap,
) as (keyof typeof languageMap)[];
export type LanguageType = (typeof supportedLanguages)[number];

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
   * @title 是否使用 `dangerouslySetInnerHTML`
   * @description 是否使用 `dangerouslySetInnerHTML` 来渲染多段代码
   * @default false
   */
  innerHTML?: boolean;
  /**
   * @title 高亮内容，为 JSON 时支持 object
   * @description 高亮内容，为 JSON 时支持 object
   * @renderType json
   * @renderOptions {"format": "string"}
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

// 自定义规则适配多语言
const withCustomRule = (fn, enableCustomRule) => (args) => {
  const { contains, ...rest } = fn(args);
  const rule = enableCustomRule ? customRule : [];
  return {
    ...rest,
    contains: [
      // 注入自定义规则(日期, 时间, 日志状态)
      ...rule,
      // 原始的规则定义
      ...contains,
    ],
  };
};

export const registerLanguage = (
  language: string,
  enableCustomRule: boolean,
) => {
  if (language && languageMap[language]) {
    hljs.registerLanguage(
      language,
      withCustomRule(languageMap[language], enableCustomRule),
    );
  } else {
    Object.keys(languageMap).forEach((lan) => {
      hljs.registerLanguage(
        lan,
        withCustomRule(languageMap[lan], enableCustomRule),
      );
    });
  }
};

export const renderHightlight = (language, content) => {
  const result = language
    ? hljs.highlight(language, content || '')
    : hljs.highlightAuto(content);
  return result;
};

const Highlight: React.FC<HighlightProps> = (props) => {
  const {
    children,
    style,
    height,
    className,
    innerHTML,
    lineNumber = false,
    copyable = true,
    theme = THEME_LIGHT,
    language,
    prefixCls: customPrefixCls,
    onCopy,
  } = props;

  const prefixCls = getPrefixCls('highlight', customPrefixCls);
  const { styles } = useStyles(prefixCls);

  const themeClass =
    theme === THEME_DARK ? styles.darkTheme : styles.lightTheme;

  const codeRef = createRef<HTMLPreElement>();

  // 代码块展示的结构
  const [codeBlock, setCodeBlock] = useState();

  // 按需加载语言
  useEffect(() => {
    if (language && languageMap[language]) {
      hljs.registerLanguage(language, languageMap[language]);
    } else {
      Object.keys(languageMap).forEach((lan) => {
        hljs.registerLanguage(lan, languageMap[lan]);
      });
    }
  }, [language]);

  const highlightCode = () => {
    // 数据为空即跳过渲染
    if (!children) {
      return;
    }

    // 构造table展示codeblock
    const { value } = renderHightlight(language, children);
    const sourceData = value.split(/\r?\n/);
    // 构造整个list所需要的内容（行号和内容）
    const rowList = sourceData.map((rowValue, index) => ({
      value: rowValue,
      index: index + 1,
    }));
    setCodeBlock(
      rowList.map((src, index) => {
        return (
          <tr key={index}>
            <HighlightCell
              lineNumber={lineNumber}
              width="100%"
              data={src}
              theme={theme}
              prefixCls={prefixCls}
            />
          </tr>
        );
      }),
    );
  };

  // 触发重新渲染
  useEffect(() => {
    highlightCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, innerHTML, theme, language, lineNumber]);

  // 支持复制能力
  useKeyDownCopyEvent(codeRef, onCopy);

  const customProps = { ref: codeRef, className, style, tabIndex: '-1' } as any;

  if (innerHTML) {
    customProps.dangerouslySetInnerHTML = { __html: children as string };
    return <div {...customProps} />;
  }

  const CopyButton = () => {
    const [copyId, setCopyId] = useState<number | undefined>();
    useEffect(() => {
      return () => {
        window.clearTimeout(copyId);
      };
    });
    const [copied, setCopied] = useState(false);
    return (
      <>
        <CopyToClipboard
          text={children && children.length ? children : ''}
          onCopy={() => {
            setCopied(true);
            const tempCopyId = window.setTimeout(() => {
              setCopied(false);
            }, 2000);
            setCopyId(tempCopyId);
            if (onCopy) onCopy(children);
          }}
        >
          <button
            type={'button'}
            disabled={copied}
            className={styles.copy}
            style={{
              background: `${theme === THEME_DARK ? `#2b303b` : `#fafafa`}`,
            }}
          >
            <CopyOutlined
              className={classNames(styles.copyIcon, { scoll: copied })}
              style={{
                color: `${theme === THEME_DARK ? `#fafafa` : `#2b303b`}`,
              }}
            />
            <CheckOutlined
              className={styles.copyIcon}
              style={{ color: 'rgb(63,177,99)' }}
            />
          </button>
        </CopyToClipboard>
      </>
    );
  };

  return (
    <>
      <pre
        {...customProps}
        style={{
          position: 'relative',
          margin: 0,
          ...style,
        }}
        className={classNames(prefixCls, className, themeClass)}
      >
        {copyable && <CopyButton />}
        {/* 展示lineNumber或不展示 */}
        <table
          style={{
            padding: '0',
            height,
            borderCollapse: 'collapse',
          }}
          className={classNames(
            `${theme === THEME_DARK ? styles.darkTheme : styles.lightTheme}`,
          )}
        >
          <tbody>{codeBlock}</tbody>
        </table>
      </pre>
    </>
  );
};

const HighlightWrapper = (props: HighlightProps) => {
  const { language, children } = props;
  if (
    language === 'json' &&
    children &&
    typeof children === 'object' &&
    !isValidElement(children)
  ) {
    return <JsonView {...props} json={children} />;
  }

  return <Highlight {...props} />;
};

export { HighlightWrapper as Highlight };
