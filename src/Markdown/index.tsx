import { Collapse, Divider, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PluggableList } from 'react-markdown/lib/react-markdown';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  onDoubleClick?: () => void;
  style?: CSSProperties;
}

const MemoHr = memo(() => <Divider style={{ marginBottom: '1em', marginTop: 0 }} />);
const MemoDetails = memo(() => <Collapse style={{ marginBottom: '1em' }} />);
const MemoAlink = memo(() => <Typography.Link />);
const MemoImage = memo(() => <img />);

const Markdown = memo<MarkdownProps>(({ children, className, style, onDoubleClick, ...rest }) => {
  const { styles } = useStyles();
  const components: any = {
    a: MemoAlink,
    details: MemoDetails,
    hr: MemoHr,
    img: MemoImage,
    pre: Code,
  };

  return (
    <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
      <ReactMarkdown
        className={styles.markdown}
        components={components}
        rehypePlugins={[rehypeKatex] as PluggableList}
        remarkPlugins={[remarkGfm, remarkMath]}
        {...rest}
      >
        {children}
      </ReactMarkdown>
    </Typography>
  );
});

export default Markdown;
