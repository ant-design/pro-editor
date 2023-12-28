import { createStyles } from '../theme';

export const useStyle = createStyles(({ css, token, cx, prefixCls }, { themeType }) => {
  const STUDIO_UI_PREFIX = `${prefixCls}-${token?.editorPrefix}`;
  const prefix = `${STUDIO_UI_PREFIX}-layout`;

  const typeStylish = css`
    background-color: ${themeType === 'block'
      ? token.colorFillTertiary
      : themeType === 'pure'
      ? 'transparent'
      : token.colorFillQuaternary};
    border: 1px solid
      ${themeType === 'block'
        ? 'transparent'
        : themeType === 'pure'
        ? 'transparent'
        : token.colorBorder};
  `;

  const pureStylish =
    themeType === 'pure'
      ? css`
          border-radius: 0px;
          background-color: transparent;
          margin: 0px;
        `
      : css``;

  return {
    layout: cx(
      prefix,
      css`
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        background-color: ${token.colorBgContainer};
        overflow: hidden;
        border-radius: ${token.borderRadius}px;
        font-size: ${token.fontSizeSM}px;

        .${STUDIO_UI_PREFIX}-draggable-panel {
          border: none;
        }
      `,
      pureStylish,
    ),
    header: cx(
      `${prefix}-header`,
      css`
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4}px;
      `,
      typeStylish,
      pureStylish,
    ),
    footer: cx(
      `${prefix}-footer`,
      css`
        height: 36px;
        box-sizing: border-box;
        margin: ${token.margin / 4}px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorFillQuaternary};
      `,
      typeStylish,
      pureStylish,
    ),

    flexContainer: cx(
      `${prefix}-flex-container`,
      css`
        padding: ${token.margin / 2 + 2}px;
        position: relative;
      `,
    ),

    centerPannel: cx(
      `${prefix}-center-pannel`,
      css`
        flex: 1;
      `,
    ),

    container: cx(
      `${prefix}-container`,
      css`
        flex: 1;
        display: flex;
        clear: both;
      `,
    ),
    pannel: cx(
      `${prefix}-pannel`,
      css`
        border-radius: ${token.borderRadius}px;
        box-sizing: border-box;
        background-color: ${token.colorFillQuaternary};
        margin: ${token.margin / 4}px;
        height: calc(100% - ${themeType === 'pure' ? 0 : token.margin / 2}px);
        padding: ${token.margin / 2 + 2}px;
      `,
      typeStylish,
      pureStylish,
    ),

    leftPannel: cx(`${prefix}-left-pannel`, css``),
    rightPannel: cx(`${prefix}-right-pannel`, css``),
    tip: cx(
      `${prefix}-tip`,
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
