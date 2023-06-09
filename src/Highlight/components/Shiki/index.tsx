/**
 * 高亮能力基于highlight.js 的语法解析能力 https://highlightjs.org/
 * 听说过的还算有名的语言放在langugaes中了，需要新增语言时在languages文件夹中添加并import使用，加入到 languageMap中
 * 如果没有在 https://github.com/highlightjs/highlight.js/tree/master/src/languages 中查找是否支持，然后添加
 * 优先支持主流语言，没有import在代码中使用的不会打包
 */
import { Loading3QuartersOutlined as Loading } from '@ant-design/icons';
import classNames from 'classnames';
import { Center } from 'react-layout-kit';
import { useShiki } from '../../hooks/useShiki';
import { HighlightProps } from '../../index';
import { useStyles } from './style';

export type ShikiProps = Pick<
  HighlightProps,
  'language' | 'children' | 'theme' | 'prefixCls' | 'lineNumber'
>;

const HighLighter: React.FC<ShikiProps> = (props) => {
  const { children, lineNumber = false, theme, language, prefixCls } = props;
  const { styles, theme: globalTheme } = useStyles({ prefixCls, lineNumber });
  const { renderShiki, loading } = useShiki(language, theme);

  return loading ? (
    <Center className={styles.loading} gap={8} horizontal>
      <Loading spin style={{ color: globalTheme.colorTextTertiary }} />
      Highlighting...
    </Center>
  ) : (
    <div
      className={classNames(styles.shiki)}
      dangerouslySetInnerHTML={{
        __html: renderShiki(children) || '',
      }}
    />
  );
};

export default HighLighter;
