/**
 * 高亮能力基于highlight.js 的语法解析能力 https://highlightjs.org/
 * 听说过的还算有名的语言放在langugaes中了，需要新增语言时在languages文件夹中添加并import使用，加入到 languageMap中
 * 如果没有在 https://github.com/highlightjs/highlight.js/tree/master/src/languages 中查找是否支持，然后添加
 * 优先支持主流语言，没有import在代码中使用的不会打包
 */
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { HighlightProps } from '../../defalut';
import { useHighlight } from '../../hooks/useHighlight';
import { THEME_LIGHT } from '../../theme';
import HighlightCell from '../HighlightCell';
import { useStyles } from './style';

export type HighLighJSProps = Pick<
  HighlightProps,
  'language' | 'children' | 'theme' | 'prefixCls' | 'lineNumber'
>;

const HighLighJS: React.FC<HighLighJSProps> = (props) => {
  const { children, lineNumber = false, theme = THEME_LIGHT, language, prefixCls } = props;
  const [codeBlock, setCodeBlock] = useState(null);
  const { styles } = useStyles(theme);
  const { renderHighlight } = useHighlight(language);

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
            <HighlightCell lineNumber={lineNumber} data={src} prefixCls={prefixCls} />
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
    <pre className={classNames(styles.theme)}>
      <table border={0} cellPadding={0} cellSpacing={0}>
        <tbody>{codeBlock}</tbody>
      </table>
    </pre>
  );
};

export default HighLighJS;
