import CopyButton from '@/components/CopyButton';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import {
  ActionIcon,
  Button,
  HIGHLIGHT_LANGUAGES,
  Highlight,
  Select,
  type SelectProps,
} from '@ant-design/pro-editor';
import classNames from 'classnames';
import { memo, useMemo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStyles } from './style';

const options: SelectProps['options'] = HIGHLIGHT_LANGUAGES.map((key) => ({
  label: key,
  value: key.toLowerCase(),
}));

export interface HighlightWrapperProps {
  /**
   * @description The code content to be highlighted
   */
  children?: any;
  /**
   * @description The language of the code content
   */
  language?: string;
  /**
   * classNames
   */
  className?: string;
  /**
   * style
   */
  style?: React.CSSProperties;
}

const HighlightWrapper = memo((props: HighlightWrapperProps) => {
  const { children, language = 'markdown', className, style } = props || {};
  const [expand, setExpand] = useState(true);
  const [lang, setLang] = useState(language);
  const { styles } = useStyles();

  const highlightBlock = useMemo(() => {
    return (
      <Highlight
        language={lang?.toLowerCase()}
        copyable={false}
        showLanguage={false}
        type="block"
        style={{ maxHeight: 400, overflowY: 'scroll' }}
      >
        {children}
      </Highlight>
    );
  }, [lang, children]);

  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
        <ActionIcon
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
        <CopyButton className={styles.copy} content={children} />
      </Flexbox>
      {expand ? highlightBlock : null}
    </div>
  );
});

export default HighlightWrapper;
