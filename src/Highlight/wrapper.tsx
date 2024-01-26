import CopyButton from '@/components/CopyButton';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { ActionIcon, Button, Select, type SelectProps } from '@ant-design/pro-editor';
import classNames from 'classnames';
import { memo, useState } from 'react';
import { DivProps, Flexbox } from 'react-layout-kit';
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
  language?: string;
}
const options: SelectProps['options'] = Object.keys(languageMap).map((key) => ({
  label: key,
  value: key.toLowerCase(),
}));

export const FullFeatureWrapper = memo<HighlighterWrapperProps & HighlightProps>((props) => {
  const {
    children,
    language = 'markdown',
    className,
    style,
    theme = THEME_LIGHT,
    copyable = true,
    type = 'block',
  } = props || {};
  const [expand, setExpand] = useState(true);
  const [lang, setLang] = useState(language);
  const { styles } = useStyles({
    theme,
    type,
  });

  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
        <ActionIcon
          className={styles.expland}
          icon={expand ? <DownOutlined size={14} /> : <RightOutlined size={14} />}
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
          value={[lang.toLowerCase()]}
        />
        {copyable && <CopyButton className={styles.copy} content={children} />}
      </Flexbox>
      <HighlightBase
        {...props}
        language={lang?.toLowerCase()}
        style={expand ? {} : { height: 0, overflow: 'hidden', border: 'none' }}
        copyable={false}
        showLanguage={false}
      />
    </div>
  );
});

export default FullFeatureWrapper;
