import type { ComponentAssetParams } from '../types';

import { TestComponent, TestPanel } from './Component';

import type { ButtonConfig } from './store';
import { createStore } from './store';

import { contentModel } from './models';

export const demoAssets: ComponentAssetParams<ButtonConfig> = {
  id: 'Button',

  createStore,
  ui: {
    Component: TestComponent,
    ConfigPanel: TestPanel,
    rules: [],
  },

  models: [contentModel],

  codeEmitter: () => '',
};

export * from './models';
export * from './store';
