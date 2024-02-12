export type SchemaItem = {
  title?: string;
  dataIndex?: string;
};

export interface ItemRenderProps {
  item: SchemaItem;
  index: number;
  compact?: boolean;
}

export const fieldStyle: React.CSSProperties = {
  flex: 1,
  width: '100%',
  height: '24px',
  fontSize: '12px',
  borderRadius: '2px',
  minWidth: '48px',
};

export const INIT_VALUES = [
  { id: 'index', title: 'Index', dataIndex: 'indexBorder' },
  {
    id: 'authName',
    title: 'Enterprise',
    dataIndex: 'text',
  },
  { id: 'authedName', title: 'Company', dataIndex: 'select' },
];

/*
 * Column 所有类型
 * */
export const tableColumnValueOptions = [
  { label: 'index', value: 'index' },
  { label: 'indexBorder', value: 'indexBorder' },
  { label: 'digit', value: 'digit' },
  { label: 'password', value: 'password' },
  { label: 'money', value: 'money' },
  { label: 'text', value: 'text' },
  { label: 'textarea', value: 'textarea' },
  { label: 'date', value: 'date' },
  { label: 'option', value: 'option' },
  { label: 'dateTime', value: 'dateTime' },
  { label: 'dateWeek', value: 'dateWeek' },
  { label: 'dateMonth', value: 'dateMonth' },
  { label: 'dateQuarter', value: 'dateQuarter' },
  { label: 'dateYear', value: 'dateYear' },
  { label: 'dateRange', value: 'dateRange' },
  { label: 'dateTimeRange', value: 'dateTimeRange' },
  { label: 'time', value: 'time' },
  { label: 'timeRange', value: 'timeRange' },
  { label: 'select', value: 'select' },
  { label: 'checkbox', value: 'checkbox' },
  { label: 'rate', value: 'rate' },
  { label: 'radio', value: 'radio' },
  { label: 'radioButton', value: 'radioButton' },
  { label: 'progress', value: 'progress' },
  { label: 'percent', value: 'percent' },
  { label: 'second', value: 'second' },
  { label: 'avatar', value: 'avatar' },
  { label: 'code', value: 'code' },
  { label: 'switch', value: 'switch' },
  { label: 'fromNow', value: 'fromNow' },
  { label: 'image', value: 'image' },
  { label: 'jsonCode', value: 'jsonCode' },
  { label: 'color', value: 'color' },
];
