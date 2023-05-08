import type { FC, PropsWithChildren } from 'react';

export interface ConfigPanelProps {
  componentStore: any;
}

export type ComponentConfigPanel = FC<ConfigPanelProps>;
export type ComponentCanvas = FC<{ componentStore: any }>;
export type DataProvider = FC<PropsWithChildren<{ createStore: () => any }>>;

export type ProviderType = any;
