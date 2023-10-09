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
  { id: 'index', title: '序号', dataIndex: 'indexBorder' },
  {
    id: 'authName',
    title: '授权企业名称',
    dataIndex: 'text',
  },
  { id: 'authedName', title: '被授权企业', dataIndex: 'select' },
];

/*
 * Column 所有类型
 * */
export const tableColumnValueOptions = [
  { label: '序号', value: 'index' },
  { label: '圆形序号', value: 'indexBorder' },
  { label: '数字', value: 'digit' },
  { label: '密码', value: 'password' },
  { label: '金额', value: 'money' },
  { label: '文本', value: 'text' },
  { label: '文本域', value: 'textarea' },
  { label: '日期', value: 'date' },
  { label: '操作', value: 'option' },
  { label: '日期时间', value: 'dateTime' },
  { label: '周', value: 'dateWeek' },
  { label: '月', value: 'dateMonth' },
  { label: '季度', value: 'dateQuarter' },
  { label: '年份', value: 'dateYear' },
  { label: '日期区间', value: 'dateRange' },
  { label: '日期时间区间', value: 'dateTimeRange' },
  { label: '时间', value: 'time' },
  { label: '时间区间', value: 'timeRange' },
  { label: '下拉框', value: 'select' },
  { label: '多选框', value: 'checkbox' },
  { label: '星级组件', value: 'rate' },
  { label: '单选框', value: 'radio' },
  { label: '按钮单选框', value: 'radioButton' },
  { label: '进度条', value: 'progress' },
  { label: '百分比', value: 'percent' },
  { label: '秒格式化', value: 'second' },
  { label: '头像', value: 'avatar' },
  { label: '代码框', value: 'code' },
  { label: '开关', value: 'switch' },
  { label: '显示当前时间', value: 'fromNow' },
  { label: '图片', value: 'image' },
  { label: 'json 格式化', value: 'jsonCode' },
  { label: '颜色选择器', value: 'color' },
];
