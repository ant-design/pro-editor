import { Collapse, Divider, Image, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { HighlightProps, SnippetProps } from '@ant-design/pro-editor';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  fullFeaturedCodeBlock?: boolean;
  onDoubleClick?: () => void;
  style?: CSSProperties;
  // Highlight 的配置，会默认透传
  highlight?: HighlightProps;
  // Snippet 的配置，会默认透传
  snippet?: SnippetProps;
}

const Markdown = memo<MarkdownProps>(
  ({ children, className, style, onDoubleClick, highlight = {}, snippet = {}, ...rest }) => {
    const { styles } = useStyles();
    const components: any = {
      a: Typography.Link,
      details: Collapse,
      hr: () => <Divider style={{ marginBottom: '1em', marginTop: 0 }} />,
      img: Image,
      pre: (props) => {
        const { children, ...rest } = props;
        return (
          <Code highlight={highlight} snippet={snippet} {...rest}>
            {children}
          </Code>
        );
      },
    };

    return (
      <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
        <ReactMarkdown
          className={styles.markdown}
          components={components}
          rehypePlugins={[rehypeKatex]}
          remarkPlugins={[remarkGfm, remarkMath]}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </Typography>
    );
  },
);

export default Markdown;
