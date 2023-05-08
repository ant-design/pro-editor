import { createStyles, css, cx } from '../theme';

export const useStyle = createStyles((_, prefixCls: string) => {
  return {
    codeWrap: cx(
      `${prefixCls}-code-wrap`,
      css`
        display: flex;
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        max-height: 100%;
        z-index: 99;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
      `,
    ),
    codeResize: cx(
      `${prefixCls}-code-resize`,
      css`
        width: 100%;
        display: flex;
        flex: 1;
        //position: absolute !important;
        padding-top: 10px;
        bottom: 0;
        padding-left: 16px;
        background-color: #24272e;
        gap: 16px;

        // 顶部拖拽
        div:last-child:active {
          div:first-child::after {
            background-color: #83c1dc;
            color: white;
          }
        }
        div:last-child {
          div:first-child::after {
            content: '· · ·';
            font-size: 22px;
            line-height: 16px;
            text-align: center;
            font-weight: 800;
            display: block;
            width: 100%;
            background-color: transparent;
            height: 16px !important;
            position: absolute !important;
            top: 5px;
            z-index: 999;
          }
          div:first-child:hover div:first-child::after {
            opacity: 1;
          }
        }
      `,
    ),
    doubleCode: cx(
      `${prefixCls}-double-code`,
      css`
        display: flex;
        justify-content: space-between;
      `,
    ),
    emptyFooter: cx(
      `${prefixCls}-footer`,
      css`
        background-color: #24272e;
        height: 70px;
        box-sizing: border-box;
      `,
    ),
  };
});
