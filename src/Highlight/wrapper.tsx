import { ActionIcon, Button, Select, type SelectProps } from '@ant-design/pro-editor';
import classNames from 'classnames';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { memo, useState } from 'react';
import { DivProps, Flexbox } from 'react-layout-kit';
import { getPrefixCls } from '..';
import CopyButton from './components/CopyButton';
import { HighlightBase, HighlightProps } from './defalut';
import { languageMap } from './hooks/useHighlight';
import { useStyles } from './style';
import { THEME_LIGHT } from './theme';

export interface HighlighterWrapperProps extends DivProps {
  /**
   * @description The code content to be highlighted
   */
  children?: any;
  /**
   * @description The language of the code content
   */
  language: string;
}

const options: SelectProps['options'] = [];

Object.entries(languageMap).forEach(([key, value]) => {
  console.log(key, value);
  options.push({
    label: key,
    value: key.toLowerCase(),
  });
});

export const FullFeatureWrapper = memo<HighlighterWrapperProps & HighlightProps>((props) => {
  const {
    children,
    language = 'markdown',
    className,
    style,
    prefixCls: customPrefixCls,
    theme = THEME_LIGHT,
    type = 'block',
  } = props || {};
  const prefixCls = getPrefixCls('highlight', customPrefixCls);
  const [expand, setExpand] = useState(true);
  const [lang, setLang] = useState(language);
  const { styles } = useStyles({
    prefixCls,
    theme,
    type,
  });

  return (
    <div className={classNames(styles.wrapper, className)} style={style} {...props}>
      <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
        <ActionIcon
          className={styles.expandIcon}
          icon={expand ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          onClick={() => setExpand(!expand)}
          size={24}
        />
        <Select
          bordered={false}
          className={styles.select}
          onSelect={setLang}
          mode="tags"
          options={options}
          tagRender={(props) => {
            return (
              <div className={styles.trigger}>
                <Button type={'text'} size={'small'}>
                  {props.label}
                </Button>
              </div>
            );
          }}
          showSearch
          size={'small'}
          suffixIcon={false}
          value={lang.toLowerCase()}
        />
        <CopyButton content={children} prefixCls={prefixCls} theme={theme} />
      </Flexbox>
      <HighlightBase
        {...props}
        language={lang?.toLowerCase()}
        style={expand ? {} : { height: 0, overflow: 'hidden' }}
        copyable={false}
      />
    </div>
  );
});

export default FullFeatureWrapper;
