import type { AssetConfigModel } from '@ant-design/pro-editor';
import type { JSONSchema } from '../types';

/**
 * 单元格属性
 */
const contentSchema: JSONSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      title: '文本',
    },
    icon: {
      type: 'string',
      title: '图标',
      default: '',
    },
  },
};

export const contentModel: AssetConfigModel = {
  key: 'content',
  schema: () => contentSchema,
  emitter: (config) => {
    return {
      icon: config.content.text,
      children: config.content.text,
    };
  },
};

export const dynamicContentModel: AssetConfigModel = {
  ...contentModel,
  schema: (mode: string) => {
    return {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          title: '文本',
          default: mode === 'prod' ? 'prod' : 'dev',
        },
        icon: {
          type: 'string',
          title: '图标',
          default: '',
        },
      },
    };
  },
};
