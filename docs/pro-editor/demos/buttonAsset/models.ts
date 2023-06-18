import type { AssetConfigModel, JSONSchema } from '@ant-design/pro-editor';

export interface ButtonConfig {
  children?: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  danger?: boolean;
  ghost?: boolean;
  icon?: string;
  shape?: 'circle' | 'round';
}

/**
 * 按钮 Schema
 */
export const buttonSchema: JSONSchema<ButtonConfig> = {
  type: 'object',
  properties: {
    children: {
      type: 'string',
      description: '设置按钮文本',
      title: '文本',
      renderProps: {
        allowClear: true,
        placeholder: '空值将无法正常显示',
        autoFocus: true,
      },
    },
    type: {
      type: 'string',
      title: '类型',
      renderType: 'radioGroup',
      default: 'default',
      enum: ['primary', 'default', 'dashed', 'link', 'text'],
      enumNames: ['强调', '默认', '虚线', '链接', '文本'],
      renderOptions: {
        layout: 'vertical',
        noLabel: true,
      },
    },
    danger: {
      type: 'boolean',
      renderType: 'boolean',
      title: '危险态',
      default: false,
    },
    icon: {
      type: 'string',
      title: '图标',
      default: '',
    },
    size: {
      title: '大小',
      type: 'string',
      renderType: 'radioGroup',
      enum: ['large', 'middle', 'small'],
      enumNames: ['大', '中', '小'],
      default: 'middle',
      category: 'style',
    },
    shape: {
      title: '形状',
      type: 'string',
      renderType: 'radioGroup',
      enumOptions: [
        {
          label: '默认',
        },
        {
          label: '圆形',
          value: 'circle',
        },
        {
          label: '胶囊',
          value: 'round',
        },
      ],
      category: 'style',
      renderOptions: {},
    },
    loading: {
      type: 'boolean',
      renderType: 'boolean',
      title: '加载中',
      default: false,
      category: 'status',
    },
    disabled: {
      type: 'boolean',
      renderType: 'boolean',
      title: '禁用',
      default: false,
      category: 'status',
    },
    ghost: {
      type: 'boolean',
      renderType: 'boolean',
      title: '幽灵按钮',
      default: false,
      category: 'style',
    },
  },
};

export const buttonModel: AssetConfigModel = {
  key: 'content',
  schema: () => buttonSchema,
  emitter: (config) => {
    return {
      icon: config.content.text,
      children: config.content.text,
    };
  },
};
