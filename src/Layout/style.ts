import { STUDIO_UI_PREFIX, createStyles } from '../theme';

export const useStyle = createStyles(({ css, token, cx }, prefixCls: string) => {
  return {
    layout: cx(
      prefixCls,
      css`
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
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
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4}px;
      `,
    ),
    footer: cx(
      `${prefixCls}-footer`,
      css`
        height: 36px;
        box-sizing: border-box;
        margin: ${token.margin / 4}px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
      `,
    ),

    flexContainer: cx(
      `${prefixCls}-flex-container`,
      css`
        padding: ${token.margin / 2 + 2}px;
        position: relative;
      `,
    ),

    centerPannel: cx(
      `${prefixCls}-center-pannel`,
      css`
        flex: 1;
      `,
    ),

    container: cx(
      `${prefixCls}-container`,
      css`
        flex: 1;
        display: flex;
        clear: both;
      `,
    ),
    pannel: cx(
      `${prefixCls}-pannel`,
      css`
        border-radius: ${token.borderRadius}px;
        box-sizing: border-box;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4}px;
        height: calc(100% - ${token.margin / 2}px);
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

    headerAndFooterCenterChildren: cx(
      'headerAndFooterCenterChildren',
      css`
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `,
    ),

    headerAndFooterIcon: cx(
      'headerAndFooterIcon',
      css`
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 50px;
      `,
    ),

    headerAndFooterExtra: cx(
      'headerAndFooterExtra',
      css`
        min-width: 50px;
      `,
    ),
  };
});
