import type { ComponentAssetParams } from '@ant-design/pro-editor';
import { ButtonComponent } from './_Component';
import { ButtonPanel } from './_Panel';
import codeEmitter from './codeEmitter';
import { ButtonConfig, buttonModel } from './models';
import { createStore } from './store';

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

  codeEmitter,
};
