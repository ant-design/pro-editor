import { STUDIO_UI_PREFIX, createStyles } from '../theme';

export const useStyle = createStyles(({ css, token, cx }, prefixCls: string) => {
  return {
    layout: cx(
      prefixCls,
      css`
        height: 100vh;
        width: 100vw;
        background-color: ${token.colorBgContainer};
        overflow: hidden;
        border-radius: ${token.borderRadius}px;

        .${STUDIO_UI_PREFIX}-draggable-panel {
          border: none;
        }
      `,
    ),
    header: cx(
      `${prefixCls}-header`,
      css`
        height: 48px;
        min-height: 48px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4 + 2}px;
        margin-bottom: 0;
      `,
    ),
    footer: cx(
      `${prefixCls}-footer`,
      css`
        height: 28px;
        margin: ${token.margin / 4 + 2}px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
      `,
    ),

    flexContainer: cx(
      `${prefixCls}-flex-container`,
      css`
        padding: ${token.margin / 2 + 2}px;
      `,
    ),

    centerPannel: cx(
      `${prefixCls}-center-pannel`,
      css`
        flex: 1;
        .${prefixCls}-pannel {
          height: calc(100% - ${token.margin / 2 - 2}px - ${token.margin + 4}px);
          // width: calc(100% - ${token.margin / 2 - 2}px - ${token.margin + 4}px);
          margin: ${token.margin / 4 + 2}px ${token.margin / 4 - 1}px;
        }
      `,
    ),

    container: cx(
      `${prefixCls}-container`,
      css`
        flex: 1;
        display: flex;
      `,
    ),
    pannel: cx(
      `${prefixCls}-pannel`,
      css`
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4 + 2}px;
        height: calc(100% - ${token.margin / 4}px - ${token.margin + 4}px);
        padding: ${token.margin / 2 + 2}px;
      `,
    ),

    leftPannel: cx(`${prefixCls}-left-pannel`, css``),
    rightPannel: cx(`${prefixCls}-right-pannel`, css``),
    tip: cx(
      `${prefixCls}-tip`,
      css`
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      `,
    ),
  };
});
