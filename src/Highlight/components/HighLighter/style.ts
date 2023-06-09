import { createStyles } from '../../../theme';
import { darkThemeBg, lightThemeBg } from '../../theme';

export const useStyles = createStyles(({ css, cx }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    lightTheme: cx(
      `${prefix}-light`,
      css`
        display: block;
        padding: 0.5em;
        overflow-x: auto;
        color: #383a42;
        background: ${lightThemeBg};

        .hljs-comment,
        .hljs-quote {
          color: #a0a1a7;
          font-style: italic;
        }

        .hljs-doctag,
        .hljs-keyword,
        .hljs-formula {
          color: #a626a4;
        }

        .hljs-section,
        .hljs-name,
        .hljs-selector-tag,
        .hljs-deletion,
        .hljs-subst {
          color: #e45649;
        }

        .hljs-literal {
          color: #0184bb;
        }

        .hljs-string,
        .hljs-regexp,
        .hljs-addition,
        .hljs-attribute,
        .hljs-meta-string {
          color: #50a14f;
        }

        .hljs-built_in,
        .hljs-class .hljs-title {
          color: #c18401;
        }

        .hljs-attr,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-type,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo,
        .hljs-number {
          color: #986801;
        }

        .hljs-symbol,
        .hljs-bullet,
        .hljs-link,
        .hljs-meta,
        .hljs-selector-id,
        .hljs-title {
          color: #4078f2;
        }

        .hljs-emphasis {
          font-style: italic;
        }

        .hljs-strong {
          font-weight: bold;
        }

        .hljs-link {
          text-decoration: underline;
        }
      `,
    ),
    darkTheme: cx(
      `${prefix}-dark`,
      css`
        display: block;
        padding: 0.5em;
        overflow-x: auto;
        color: #c0c5ce;
        background: ${darkThemeBg};

        /* Ocean Comment */
        .hljs-comment,
        .hljs-quote {
          color: #65737e;
        }

        /* Ocean Red */
        .hljs-variable,
        .hljs-template-variable,
        .hljs-tag,
        .hljs-name,
        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-regexp,
        .hljs-deletion {
          color: #bf616a;
        }

        /* Ocean Orange */
        .hljs-number,
        .hljs-built_in,
        .hljs-builtin-name,
        .hljs-literal,
        .hljs-type,
        .hljs-params,
        .hljs-meta,
        .hljs-link {
          color: #d08770;
        }

        /* Ocean Yellow */
        .hljs-attribute {
          color: #ebcb8b;
        }

        /* Ocean Green */
        .hljs-string,
        .hljs-symbol,
        .hljs-bullet,
        .hljs-addition {
          color: #a3be8c;
        }

        /* Ocean Blue */
        .hljs-title,
        .hljs-section {
          color: #8fa1b3;
        }

        /* Ocean Purple */
        .hljs-keyword,
        .hljs-selector-tag {
          color: #b48ead;
        }

        .hljs-emphasis {
          font-style: italic;
        }

        .hljs-strong {
          font-weight: bold;
        }
      `,
    ),
  };
});
