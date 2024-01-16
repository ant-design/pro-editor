import { createStyles } from '../theme';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-sortable-tree`;

  return css`
    & .${prefix}-node {
      box-sizing: border-box;
      padding-left: var(--spacing);
      list-style: none;
    }

    .${prefix}-node {
      &-clone {
        display: inline-block;
        padding: 0;
        padding-top: 5px;
        padding-left: 10px;
        pointer-events: none;

        .${prefix}-node-body {
          padding-right: 24px;
          background-color: ${token.colorBgContainer};
          border: 1px solid #dedede;
          border-radius: 4px;
          box-shadow: 0 15px 15px 0 rgba(34, 33, 81, 0.1);
        }
      }

      &:hover {
        .${prefix}-node-handle {
          opacity: 1;
        }
      }

      &-ghost {
        &.${prefix}-node-indicator {
          position: relative;
          z-index: 1;
          margin-bottom: -1px;
          opacity: 1;

          .${prefix}-node-body {
            position: relative;
            height: 4px;
            padding: 0;
            background-color: #56a1f8;
            border-color: #1677ff;

            &::before {
              position: absolute;
              top: -4px;
              left: -8px;
              display: block;
              width: 12px;
              height: 12px;
              background-color: #fff;
              border: 1px solid #1677ff;
              border-radius: 50%;
              content: '';
            }

            > * {
              height: 0;

              /* Items are hidden using height and opacity to retain focus */
              opacity: 0;
            }
          }
        }

        &:not(.${prefix}-node-indicator) {
          opacity: 0.5;
        }

        .${prefix}-node-body > * {
          background-color: transparent;
          box-shadow: none;
        }
      }

      &-selected {
        .${prefix}-node-body {
          // 暂时先不实现选中效果
          // background-color: ${token.colorPrimaryBg};
          // outline: 1px solid ${token.colorPrimary};
        }
      }

      &-body {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 2px;
        background-color: ${token.colorFillQuaternary};
        border-radius: 4px;
      }

      &-content {
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &-count {
        position: absolute;
        top: -10px;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        background-color: #1677ff;
        border-radius: 50%;
      }
    }

    .disableSelection,
    .clone {
      .${prefix}-node-content, .${prefix}-node-count {
        user-select: none;
      }
    }
  `;
});
