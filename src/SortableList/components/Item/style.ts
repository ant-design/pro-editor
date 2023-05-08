import { createStyles, keyframes } from '../../../theme';

const boxShadowBorder =
  '0 0 0 calc(1px / var(--scale-x, 1)) rgba(0, 0, 0, 0.05)';
const boxShadowCommon =
  '0 1px calc(3px / var(--scale-x, 1)) 0 rgba(0, 0, 0, 0.15)';
const boxShadow = `${boxShadowBorder} ${boxShadowCommon}`;

const pop = keyframes`
	0% {
		box-shadow: var(--box-shadow);
		transform: scale(1);
	}
	100% {
		box-shadow: var(--box-shadow-picked-up);
		transform: scale(var(--scale));
	}
`;

const fadeIn = keyframes`
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
`;

export const useStyle = createStyles(
  ({ css, cx, token }, prefixCls: string) => {
    const prefix = `${prefixCls}`;

    return {
      item: cx(
        `${prefixCls}-item`,
        css`
          position: relative;
          display: flex;
          flex-grow: 1;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 1px 0;
          color: ${token.colorTextSecondary};
          font-size: 12px;
          white-space: nowrap;
          list-style: none;
          border-radius: 4px;
          outline: none;
          transform: scale(var(--scale, 1));
          transform-origin: 50% 50%;
          transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
          -webkit-tap-highlight-color: transparent;

          &:focus-visible {
            box-shadow: 0 0 4px 1px #4c9ffe, ${boxShadow};
          }

          &:not(.${prefix}-item-withHandle) {
            cursor: grab;
            -webkit-user-select: none;
            user-select: none;
            touch-action: none;
          }

          &-dragging:not(.${prefix}-item-dragOverlay) {
            z-index: 0;
            opacity: var(--dragging-opacity, 0.5);

            &:focus {
              box-shadow: ${boxShadow};
            }
          }

          &:hover .${prefixCls}-item-actions {
            opacity: 1;
          }
        `,
      ),
      disabled: cx(
        `${prefixCls}-item-disabled`,
        css`
          color: #999;
          background-color: #f1f1f1;
          cursor: not-allowed;
          &:focus {
            box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1), ${boxShadow};
          }
        `,
      ),
      dragOverlay: cx(
        `${prefixCls}-item-dragOverlay`,
        css`
          padding: 4px 0;
          background-color: ${token.colorBgElevated};
          border: none;
          box-shadow: var(--box-shadow-picked-up);
          transform: scale(var(--scale));
          cursor: inherit;
          opacity: 1;

          /* box-shadow: 0 0px 6px 2px @focused-outline-color; */
          animation: ${pop} 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
        `,
      ),
      wrapper: cx(
        `${prefixCls}-item-wrapper`,
        css`
          display: flex;
          box-sizing: border-box;
          transform: translate3d(
              var(--translate-x, 0),
              var(--translate-y, 0),
              0
            )
            scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));
          transform-origin: 0 0;
          touch-action: manipulation;

          &:not(:last-child) {
            margin-bottom: 2px;
          }
        `,
      ),
      wrapperFadeIn: cx(
        `${prefixCls}-item-wrapper-fadeIn`,
        css`
          animation: ${fadeIn} 500ms ease;
        `,
      ),
      wrapperdragOverlay: cx(
        `${prefixCls}-item-wrapper-dragOverlay`,
        css`
          --scale: 1.05;
          --box-shadow: ${boxShadow};
          --box-shadow-picked-up: ${boxShadowBorder},
            -1px 0 15px 0 rgba(82, 82, 82, 0.01),
            0 15px 15px 0 rgba(82, 82, 82, 0.25);

          z-index: 999;
        `,
      ),
      actions: cx(
        `${prefixCls}-item-actions`,
        css`
          z-index: 10;
          color: hsla(0, 0, 0, 0.45);
          opacity: 0;
        `,
      ),
      actionsLeft: cx(
        `${prefixCls}-item-actions-left`,
        css`
          position: absolute;
          top: 0;
          left: 0;

          .studio-btn.studio-btn-sm.studio-btn-icon-only {
            width: 14px;
            height: 24px;
            > svg {
              width: 14px;
            }
          }
        `,
      ),

      actionsRight: cx(
        `${prefixCls}-item-actions-right`,
        css`
          position: absolute;
          top: 1px;
          right: 1px;
          align-self: flex-end;
          overflow: hidden;
          border-radius: 1px;
          // 采用背景模糊来解决多种背景色下覆盖内容的问题 TODO：FireFox 兼容
          backdrop-filter: blur(5px);
          //background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, @bg-2 10%, @bg-2 100%);

          .tech-studio-actionicon-icon {
            height: 22px;
          }
        `,
      ),
      content: cx(
        `${prefixCls}-item-content`,
        css`
          position: relative;
          width: 100%;
        `,
      ),
    };
  },
);
