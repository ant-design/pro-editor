/**
 * 高亮能力基于highlight.js 的语法解析能力 https://highlightjs.org/
 * 听说过的还算有名的语言放在langugaes中了，需要新增语言时在languages文件夹中添加并import使用，加入到 languageMap中
 * 如果没有在 https://github.com/highlightjs/highlight.js/tree/master/src/languages 中查找是否支持，然后添加
 * 优先支持主流语言，没有import在代码中使用的不会打包
 */
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useHighlight } from '../../hooks/useHighlight';
import { HighlightProps } from '../../index';
import { THEME_DARK, THEME_LIGHT } from '../../theme';
import HighlightCell from '../HighlightCell';
import { useStyles } from './style';

export type HighLighterProps = Pick<
  HighlightProps,
  'language' | 'children' | 'theme' | 'prefixCls' | 'lineNumber'
>;

const HighLighter: React.FC<HighLighterProps> = (props) => {
  const { children, lineNumber = false, theme = THEME_LIGHT, language, prefixCls } = props;
  const [codeBlock, setCodeBlock] = useState(null);
  const { styles } = useStyles(prefixCls);
  const { renderHighlight } = useHighlight(language);

  const themeClass = theme === THEME_DARK ? styles.darkTheme : styles.lightTheme;

  const highlightCode = () => {
    // 数据为空即跳过渲染
    if (!children) {
      return;
    }

    // 构造table展示codeblock
    const value = renderHighlight(children);
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
  }, [children, theme, language, lineNumber]);

  return (
    <pre className={classNames(themeClass)}>
      <table
        className={classNames(
          styles.table,
          `${theme === THEME_DARK ? styles.darkTheme : styles.lightTheme}`,
        )}
      >
        <tbody>{codeBlock}</tbody>
      </table>
    </pre>
  );
};

export default HighLighter;
