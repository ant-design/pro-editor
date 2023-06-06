import { createStyles } from 'antd-style';
import { STUDIO_UI_PREFIX } from '../../theme';

const studioCls = `.${STUDIO_UI_PREFIX}`;

export const useStyle = createStyles(({ token, css }) => {
  return {
    directory: css({
      [`${studioCls}-tree-directory`]: {
        [`${studioCls}-tree`]: {
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
              [`& ${studioCls}-tree-switcher`]: {
                color: token.colorText,
              },

              [`& ${studioCls}-tree-node-content-wrapper`]: {
                color: token.colorText,
              },
            },

            '&:hover::before': {
              background: token.colorFillQuaternary,
              borderColor: token.colorPrimary,
              boxShadow: `0 0 3px 0 ${token.colorPrimary}`,
            },
            [`${studioCls}-tree-switcher-noop`]: {
              cursor: 'pointer',
            },

            [`& ${studioCls}-tree-switcher`]: {
              color: token.colorText,
            },

            [`& ${studioCls}-tree-node-content-wrapper`]: {
              color: token.colorText,
            },
          },

          // 选中样式
          '&-treenode-selected': {
            '&::before': {
              background: token.colorBgContainer,
              border: `${token.borderRadiusXS} solid ${token.colorPrimary}`,
            },

            [`& ${studioCls}-tree-switcher`]: {
              color: token.colorText,
            },

            [`& ${studioCls}-tree-node-content-wrapper`]: {
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
