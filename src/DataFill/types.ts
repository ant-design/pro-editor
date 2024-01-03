import type { MouseEvent, ReactNode } from 'react';

const FILL_KEY_MAP = {
  // 通用
  common: [
    // 人名
    'name',
    // 网址
    'website',
    // 邮件
    'mail',
  ] as const,
  // 编号
  identifier: [
    // 订单号
    'order',
    // 手机号
    'phone',
    // 座机
    'landline',
    // 身份证
    'idCard',
    // 银行卡
    'bankCard',
  ] as const,
  // 数据
  data: ['percent', 'money'] as const,
  /**
   * 时间
   */
  dateTime: ['date', 'dateTime', 'week', 'month', 'time', 'timestamp'] as const,
  // 地址
  address: [
    // 国家
    'country',
    // 省份
    'province',
    // 城市
    'city',
  ] as const,
};

export type DataFillMapType = typeof FILL_KEY_MAP;

/**
 * 数据填充分组
 */
export type DataFillGroupType = keyof DataFillMapType;

/**
 * 所有默认的数据填充项
 */
export type DataFillType<T extends DataFillGroupType = DataFillGroupType> =
  DataFillMapType[T][number];

export type AddressFillType = 'address' | DataFillMapType['address'][number];

export interface FillSubTreeNode {
  key: string;
  title: string;
}

export interface FillTreeNode<T extends DataFillGroupType> {
  key: DataFillType<T>;
  title: string;
  icon?: ReactNode | string;
  children?: FillSubTreeNode[];
  params?: { value: string; label: string }[];
  checked?: { value: boolean; label: string };
}

export interface FillTreeData {
  key: DataFillGroupType;
  title: string;
  icon?: ReactNode | string;
  children: FillTreeNode<DataFillGroupType>[];
  params?: { value: string; label: string }[];
}

// ============

export interface FilledPayload {
  key: string;
  filler: () => string;
}

export type OnItemClick = (payload: FilledPayload) => void;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DataFillAppProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export interface StoreUpdaterProps {
  onClick?: OnItemClick;
}

export type DataFillProps = DataFillAppProps & StoreUpdaterProps;

// ==============

export type NameParams = 'zh' | 'en';
export type DateParams = 'zh' | 'en' | 'abbr';
export type DateTimeParams = 'date' | 'dateTime' | 'time';
export type WebsiteParams = 'url' | 'domain' | 'ip';
export type DataParams = 'digits' | 'tens' | 'hundreds';

export interface DataFillConfig extends Partial<Record<DataFillType, boolean | string>> {
  name: NameParams;
  percent: boolean;
  phone: boolean;
  landline: boolean;
  bankCard: boolean;
  idCard: boolean;
  website: WebsiteParams;
  month: DateParams;
  data: DataParams;
  week: DateParams;
  dateTime: DateTimeParams;
}

export interface ShowDemoDataPayload {
  event: MouseEvent;
  key: string;
}
