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

export const radioGroup = {
  properties: {
    checked: {
      enumOptions: [],
      title: '选中状态',
      renderType: 'radioGroup',
      type: 'boolean',
      description: '"是否选中"',
      tags: [],
      default: false,
    },
    disabled: {
      title: '禁用状态',
      renderType: 'radioGroup',
      type: 'boolean',
      description: '"是否禁用"',
      default: false,
    },
    children: {
      className: 'ReactNode',
      title: '内容',
      renderType: 'string',
      type: 'reactNode',
      description: '"选项文本"',
      default: '',
    },
  },
  className: 'RadioProps',
  type: 'object',
  required: [],
};

export const buttonSchema: any = {
  properties: {
    danger: {
      enumOptions: [
        { label: '正常', value: false },
        { label: '危险', value: true },
      ],
      title: '操作意图',
      renderType: 'radioGroup',
      type: 'boolean',
      group: 'type',
      tags: {
        renderType: 'radioGroup',
        title: '操作意图',
        default: 'false',
        enumOptions: '[{"label": "正常", value: false },{"label": "危险", value: true}]',
        category: 'type',
      },
      default: false,
    },
    style: {
      tags: { ignore: '' },
      className: 'CSSProperties',
      type: 'object',
      hidden: true,
    },
    isSubmit: {
      tags: { default: 'false', ignore: '' },
      default: false,
      type: 'boolean',
      hidden: true,
    },
    children: {
      group: 'content',
      className: 'ReactNode',
      renderOptions: {
        placeholder: '空值将无法正常显示',
        autoFocus: true,
      },
      title: '文本',
      renderType: 'string',
      type: 'reactNode',
      description: '设置按钮文本',
      tags: {
        renderType: 'string',
        title: '文本',
        default: '""',
        description: '设置按钮文本',
        category: 'content',
        renderOptions: '{ placeholder: "空值将无法正常显示", autoFocus:true }',
      },
      default: '',
    },
    loading: {
      enumOptions: [
        { label: '默认', value: false },
        { label: '加载中', value: true },
      ],
      oneOf: [
        {
          properties: { delay: { type: 'number' } },
          className: '__type',
          type: 'object',
          required: [],
        },
        { type: 'boolean' },
      ],
      title: '加载状态',
      renderType: 'radioGroup',
      enum: [false, true],
      group: 'status',
      tags: {
        category: 'status',
        enumOptions: '[{"label": "默认", value: false },{"label": "加载中", value: true}]',
        title: '加载状态',
        renderType: 'radioGroup',
        enumName: '["正常","加载中"]',
        enum: '[false , true]',
        default: 'false',
      },
      default: false,
    },
    size: {
      group: 'style',
      className: 'SizeType',
      enumOptions: [
        { label: '大', value: 'large' },
        { label: '中', value: 'middle' },
        { label: '小', value: 'small' },
      ],
      title: '大小',
      renderType: 'radioGroup',
      type: 'string',
      enum: ['small', 'middle', 'large'],
      tags: {
        renderType: 'radioGroup',
        title: '大小',
        enumOptions:
          '[{"label":"大","value": "large"},{"label":"中","value":"middle"},{"label":"小","value":"small"}]',
        default: '"middle"',
        category: 'style',
      },
      default: 'middle',
    },
    ghost: {
      enumOptions: [
        { label: '默认', value: false },
        { label: '透明', value: true },
      ],
      title: '底色',
      renderType: 'radioGroup',
      type: 'boolean',
      group: 'style',
      tags: {
        renderType: 'radioGroup',
        title: '底色',
        default: 'false',
        enumOptions: '[{"label": "默认", value: false },{"label": "透明", value: true}]',
        category: 'style',
      },
      default: false,
    },
    type: {
      group: 'type',
      renderOptions: { layout: 'vertical' },
      title: '类型',
      renderType: 'radioGroup',
      enumNames: ['强调', '默认', '虚线', '链接', '文本'],
      type: 'string',
      enum: ['primary', 'default', 'dashed', 'link', 'text'],
      tags: {
        category: 'type',
        renderOptions: '{ "layout": "vertical" }',
        title: '类型',
        renderType: 'radioGroup',
        enumNames: '["强调", "默认", "虚线", "链接", "文本"]',
        enum: '["primary","default","dashed","link","text"]',
        default: '"default"',
      },
      default: 'default',
    },
    shape: {
      group: 'style',
      enumOptions: [
        { label: '默认', value: '' },
        { label: '圆形', value: 'circle' },
        { label: '胶囊', value: 'round' },
      ],
      renderOptions: { validate: false },
      title: '形状',
      renderType: 'radioGroup',
      type: 'string',
      enum: ['default', 'circle', 'round'],
      tags: {
        renderType: 'radioGroup',
        title: '形状',
        default: '""',
        enumOptions:
          '[{"label": "默认", value: "" },{"label": "圆形", value: \'circle\'},{"label": "胶囊", value: \'round\'}]',
        category: 'style',
        renderOptions: '{"validate": false }',
      },
      default: '',
    },
    disabled: {
      enumOptions: [
        { label: '未禁用', value: false },
        { label: '禁用', value: true },
      ],
      title: '禁用状态',
      renderType: 'radioGroup',
      type: 'boolean',
      group: 'status',
      tags: {
        renderType: 'radioGroup',
        title: '禁用状态',
        default: 'false',
        enumOptions: '[{"label": "未禁用", value: false },{"label": "禁用", value: true}]',
        category: 'status',
      },
      default: false,
    },
  },
  className: 'ButtonProps',
  type: 'object',
  required: [],
};

export const tagSchema: any = {
  properties: {
    closeIcon: {
      tags: {
        title: '自定义关闭图标',
        ignore: '',
        description: '"设置自定义关闭图标"',
      },
      className: 'ReactNode',
      title: '自定义关闭图标',
      type: 'reactNode',
      description: '"设置自定义关闭图标"',
      hidden: true,
    },
    closeable: {
      renderType: 'radioGroup',
      tags: {
        renderType: 'radioGroup',
        title: '关闭图标',
        default: 'false',
        enumOptions: '[{label:"隐藏",value:false},{label:"显示",value: true}]',
      },
      title: '关闭图标',
      default: false,
      type: 'boolean',
      enumOptions: [
        { label: '隐藏', value: false },
        { label: '显示', value: true },
      ],
    },
    children: {
      className: 'ReactNode',
      renderOptions: { allowClear: true },
      title: '文本',
      renderType: 'string',
      type: 'reactNode',
      description: '"标签文本"',
      tags: {
        renderType: 'string',
        title: '文本',
        default: '""',
        description: '"标签文本"',
        renderOptions: '{ allowClear: true }',
      },
      default: '',
    },
    color: {
      enum: [
        '',
        'green',
        'blue',
        'red',
        'gold',
        'yellow',
        'orange',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'cyan',
        'lime',
        'pink',
      ],
      renderOptions: { validate: false },
      title: '颜色',
      renderType: 'select',
      enumNames: [
        '默认',
        '绿色',
        '蓝色',
        '红色',
        '金色',
        '橙色',
        '黄色',
        '紫色',
        '深蓝色',
        '洋红',
        '深橙色',
        '青色',
        '柠檬绿',
        '粉色',
      ],
      type: 'string',
      description: '"设置按钮内容"',
      tags: {
        renderOptions: '{"validate": false }',
        title: '颜色',
        renderType: 'select',
        enumNames:
          '["默认", "绿色", "蓝色", "红色", "金色","橙色","黄色", "紫色","深蓝色","洋红","深橙色","青色","柠檬绿", "粉色"]',
        description: '"设置按钮内容"',
        enum: '["","green","blue","red","gold","yellow","orange","purple", "geekblue", "magenta", "volcano", "cyan", "lime","pink"]',
        default: '""',
      },
      default: '',
    },
  },
  className: 'TagProps',
  type: 'object',
  required: ['color', 'closeable'],
};

export const menuSchema: any = {
  properties: {
    items: {
      type: 'array',
      title: '菜单项',
      items: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            title: '标题',
            renderProps: { placeholder: '请输入标题' },
          },
          disabled: { type: 'boolean', renderType: 'boolean' },
          key: { type: 'string' },
        },
        renderOptions: { exposedCnt: 2 },
      },
    },
    theme: {
      title: '主题',
      default: 'light',
      enumOptions: [
        { value: 'light', label: '亮色' },
        { value: 'dark', label: '暗色' },
      ],
    },
    mode: {
      title: '模式',
      default: 'vertical',
      enumOptions: [
        { value: 'vertical', label: '垂直' },
        { value: 'horizontal', label: '水平' },
        { value: 'inline', label: '内嵌' },
      ],
    },
  },
  className: 'MenuProps',
  type: 'object',
  required: [],
};
