import { createStyles, cx } from '../theme';

const lightThemeBg = '#fafafa';
const darkThemeBg = '#2b303b';

export const useStyles = createStyles(({ css }, prefixCls) => {
  const prefix = `${prefixCls}`;

  return {
    jsonView: cx(
      `${prefix}-json-view`,
      css`
        padding: 0;

        .react-json-view {
          padding: 0.5em;
          overflow: auto;

          .icon-container svg {
            transform: translateY(5px);
          }
        }
      `,
    ),
    lightTheme: cx(
      `${prefix}-light`,
      css`
        .react-json-view {
          background: ${lightThemeBg};
        }
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
    lightThemeIndex: cx(
      `${prefix}-light-index`,
      css`
        border-right: 1px solid rgba(0, 0, 0, 0.05);
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
    darkThemeIndex: cx(
      `${prefix}-dark-index`,
      css`
        border-right: 1px solid rgba(255, 255, 255, 0.05);
      `,
    ),
    index: cx(
      `${prefix}-index`,
      css`
        width: 40px;
        min-width: 40px;
        padding: 2px 8px;
        color: #aaa;
        text-align: right;
        background: rgba(255, 255, 255, 0.03);
        user-select: none;
      `,
    ),
    content: cx(
      `${prefix}-content`,
      css`
        padding: 2px 8px;
      `,
    ),
    copy: cx(
      `${prefix}-copy`,
      css`
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 16px;
        height: 16px;
        padding: 0;
        overflow: hidden;
        border: 0;
        outline: none;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      `,
    ),
    copyIcon: cx(
      `${prefix}-copy-icon`,
      css`
        width: 16px;
        height: 16px;
        font-size: 16px;

        @keyframes copy-button-trans {
          0% {
            margin-top: 0;
            opacity: 0.8;
          }
          10% {
            margin-top: -16px;
            opacity: 0.8;
          }
          90% {
            margin-top: -16px;
            opacity: 0.8;
          }
          100% {
            margin-top: 0;
            opacity: 0.8;
          }
        }

        &.scoll {
          animation: copy-button-trans 2s;
          animation-play-state: running;
        }
      `,
    ),
  };
});
