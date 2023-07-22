import type { JSONSchema } from '@ant-design/pro-editor';

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
      title: '按钮文本',
    },
    type: {
      type: 'string',
      title: '类型',
      default: 'default',
      enum: ['primary', 'default', 'dashed', 'link', 'text'],
      enumNames: ['强调', '默认', '虚线', '链接', '文本'],
    },
    danger: {
      type: 'boolean',
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
      enum: ['large', 'middle', 'small'],
      enumNames: ['大', '中', '小'],
      default: 'middle',
    },
    shape: {
      title: '形状',
      type: 'string',
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
    },
    loading: {
      type: 'boolean',
      title: '加载中',
      default: false,
    },
    disabled: {
      type: 'boolean',
      title: '禁用',
      default: false,
    },
    ghost: {
      type: 'boolean',
      title: '幽灵按钮',
      default: false,
    },
  },
};
