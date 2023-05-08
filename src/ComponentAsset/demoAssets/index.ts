import type { ComponentAssetParams } from '../types';

import { TestComponent, TestPanel } from './Component';

import type { ButtonConfig } from './store';
import { createStore, Provider } from './store';

import { contentModel } from './assets';

export const demoAssets: ComponentAssetParams<ButtonConfig> = {
  id: 'Button',

  createStore,
  ui: {
    Component: TestComponent,
    ConfigPanel: TestPanel,
    rules: [],
    DataProvider: Provider,
  },

  models: [contentModel],

  codeEmitter: () => '',
};

export * from './assets';
export * from './store';
