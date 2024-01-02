import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ token, css, prefixCls }) => {
  const antCls = `.${prefixCls}`;

  return {
    directory: css({
      [`${antCls}-tree-directory`]: {
        [`${antCls}-tree`]: {
          '&-switcher, &-iconEle': {
            lineHeight: '32px !important',
          },

          // 文本部分自定义
          '&-node-content-wrapper': {
            display: 'inline-flex',
            paddingLeft: '0',
            lineHeight: '32px !important',
          },

          '&-title': {
            flex: 1,
          },

          '&-treenode': {
            cursor: 'pointer',

            // 默认的背景色
            '&::before': {
              border: `1px solid ${token.colorSplit}`,
              borderRadius: token.borderRadiusSM,
            },

            '&:hover': {
              [`& ${antCls}-tree-switcher`]: {
                color: token.colorText,
              },

              [`& ${antCls}-tree-node-content-wrapper`]: {
                color: token.colorText,
              },
            },

            '&:hover::before': {
              background: token.colorFillQuaternary,
              borderColor: token.colorPrimary,
              boxShadow: `0 0 3px 0 ${token.colorPrimary}`,
            },
            [`${antCls}-tree-switcher-noop`]: {
              cursor: 'pointer',
            },

            [`& ${antCls}-tree-switcher`]: {
              color: token.colorText,
            },

            [`& ${antCls}-tree-node-content-wrapper`]: {
              color: token.colorText,
            },
          },

          // 选中样式
          '&-treenode-selected': {
            '&::before': {
              background: token.colorBgContainer,
              border: `${token.borderRadiusXS} solid ${token.colorPrimary}`,
            },

            [`& ${antCls}-tree-switcher`]: {
              color: token.colorText,
            },

            [`& ${antCls}-tree-node-content-wrapper`]: {
              color: token.colorText,
            },
          },

          // 缩进值
          '&-indent-unit': {
            width: '12px',
          },
        },
      },
    }),
  };
});
