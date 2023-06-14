import type { ComponentAssetParams } from '@ant-design/pro-editor';

import { ButtonComponent } from './Component';
import { ButtonPanel } from './Panel';

import { ButtonStore, createStore } from './store';

import { buttonModel } from './models';

export const buttonAssetParams: ComponentAssetParams<ButtonStore> = {
  id: 'Button',

  createStore,

  ui: {
    rules: [],
    Component: ButtonComponent,
    ConfigPanel: ButtonPanel,
  },

  models: [buttonModel],
  storeOptions: {
    devtools: true,
    partial: (s) => s.content,
  },

  codeEmitter: () => '',
};
