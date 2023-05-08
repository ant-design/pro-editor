import type { DataFillConfig, FillTreeData, OnItemClick } from '../types';
import defaultConfig from './config';

export interface DataFillState {
  config: DataFillConfig;
  locale: 'zh_CN';
  demoData?: string;
  demoKey?: string;
  fillTreeData: FillTreeData[];
  onItemClick?: OnItemClick;
}

const initialState: DataFillState = {
  config: {
    name: 'zh',
    website: 'url',
    phone: true,
    landline: true,
    idCard: true,
    bankCard: true,
    percent: false,
    month: 'zh',
    week: 'zh',
    data: 'hundreds',
    dateTime: 'dateTime',
  },
  locale: 'zh_CN',
  fillTreeData: defaultConfig,
};

export default initialState;
