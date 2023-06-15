import type { ComponentAssetParams } from '@ant-design/pro-editor';

import { ButtonComponent } from './_Component';
import { ButtonPanel } from './_Panel';

import { createStore } from './store';

import { ButtonConfig, buttonModel } from './models';

export const buttonAssetParams: ComponentAssetParams<ButtonConfig> = {
  id: 'Button',

  createStore,

  ui: {
    rules: [],
    Component: ButtonComponent,
    ConfigPanel: ButtonPanel,
  },

  models: [buttonModel],
  defaultConfig: {
    children: '默认按钮',
  },

  storeOptions: {
    devtools: { name: 'ButtonAssetStore' },
  },

  codeEmitter: () => '',
};
