export const schema: any = {
  type: 'object',
  properties: {
    mode: {
      type: 'string',
      title: '布局',
      default: 'default',
      enum: ['default', 'compact', 'center'],
      enumNames: ['默认', '紧凑', '居中'],
      renderOptions: {
        layout: 'vertical',
        noLabel: true,
      },
    },
    artboardWidth: {
      type: 'number',
      title: '画板总宽',
      default: 1440,
    },
    gridWidth: {
      type: 'number',
      title: '栅格总宽',
      default: 1184,
    },
    offsetLeft: {
      type: 'number',
      title: '侧边栏宽',
      default: 208,
    },

    //
    columnWidth: {
      type: 'number',
      title: '栅格槽宽',
      default: 16,
    },
    columnCount: {
      type: 'number',
      title: '栅格列数',
      default: 24,
    },

    showLeft: {
      type: 'boolean',
      title: '显示侧边栏',
      default: true,
    },
    showMargin: {
      type: 'boolean',
      title: '显示间距',
      default: true,
    },
    isOnTop: {
      type: 'boolean',
      title: '图层置顶',
      default: true,
      tags: {
        category: 'advanced',
      },
    },
    adjustNudge: {
      type: 'boolean',
      title: '修改步进',
      default: false,
      tags: {
        category: 'advanced',
      },
    },
    overrideLocal: {
      type: 'boolean',
      title: '应用到全局',
      default: false,
      tags: {
        category: 'advanced',
      },
    },
  },
};
