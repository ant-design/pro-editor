import { createStyles } from 'antd-style';
import { memo } from 'react';

import { Highlight, Snippet } from '@ant-design/pro-editor';

const useStyles = createStyles(({ css }) => ({
  container: css`
    :not(:last-child) {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  `,
  highlight: css`
    pre {
      padding: 12px !important;
    }
  `,
  snippet: css`
    display: flex;
  `,
}));

const countLines = (str: string): number => {
  const regex = /\n/g;
  const matches = str.match(regex);
  return matches ? matches.length : 1;
};

export const Code = memo((properties: any) => {
  const { styles, cx } = useStyles();

  if (!properties.children[0]) return;

  const { children, className } = properties.children[0].props;

  if (!children) return;

  const content = Array.isArray(children) ? (children[0] as string) : children;
  const lang = className?.replace('language-', '') || 'txt';

  if (countLines(content) === 1 && content.length <= 60) {
    return (
      <Snippet
        className={cx(styles.container, styles.snippet)}
        data-code-type="highlighter"
        language={lang}
        symbol={''}
        type={'block'}
      >
        {content}
      </Snippet>
    );
  }

  return (
    <Highlight
      className={cx(styles.container, styles.highlight)}
      language={lang}
      type="block"
      containerWrapper={true}
    >
      {content}
    </Highlight>
  );
});
