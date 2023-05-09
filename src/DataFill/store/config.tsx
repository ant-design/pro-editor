import {
  CalendarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  IdcardOutlined,
  MailOutlined,
  PercentageOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { FillTreeData } from '../types';

import { FillCity, FillCountry, FillMonth, FillNumber, FillText, FillWeek } from '../icons';

const fillDefaultConfig: FillTreeData[] = [
  {
    title: '文本',
    key: 'common',
    icon: <FillText />,
    params: [
      { label: '短文本', value: 'default' },
      { label: '长文本', value: 'longText' },
    ],
    children: [
      {
        key: 'name',
        icon: <UserOutlined />,
        title: '人名',
        params: [
          { value: 'zh', label: '中文' },
          { value: 'en', label: '英文' },
        ],
      },
      {
        key: 'website',
        icon: <GlobalOutlined />,
        title: '网址',
        params: [
          { value: 'url', label: '链接' },
          { value: 'domain', label: '域名' },
          { value: 'ip', label: 'IP' },
        ],
      },
      { key: 'mail', icon: <MailOutlined />, title: '邮件' },
    ],
  },
  {
    title: '编号',
    key: 'identifier',
    children: [
      {
        key: 'phone',
        icon: <PhoneOutlined />,
        title: '手机',
        checked: { label: '脱敏', value: false },
      },
      {
        key: 'landline',
        icon: <PhoneOutlined />,
        title: '座机',
        checked: { label: '脱敏', value: false },
      },
      {
        key: 'idCard',
        icon: <IdcardOutlined />,
        title: '身份证',
        checked: { label: '脱敏', value: false },
      },
      {
        key: 'bankCard',
        icon: <IdcardOutlined />,
        title: '信用卡/借记卡',
        checked: { label: '脱敏', value: false },
      },
    ],
  },
  {
    title: '数据',
    key: 'data',
    icon: <FillNumber />,
    params: [
      { value: 'digits', label: '0~9' },
      { value: 'tens', label: '10~99' },
      { value: 'hundreds', label: '100~999' },
    ],
    children: [
      {
        key: 'percent',
        title: '百分比',
        icon: <PercentageOutlined />,
        checked: { label: '小数', value: false },
      },
      {
        key: 'money',
        title: '金额',
        icon: <DollarOutlined />,
        checked: { label: '小数', value: false },
      },
    ],
  },
  {
    title: '时间',
    key: 'dateTime',
    icon: <ClockCircleOutlined />,
    params: [
      { label: '日期时间', value: 'dateTime' },
      { label: '日期', value: 'date' },
      { label: '时间', value: 'time' },
    ],
    children: [
      {
        key: 'date',
        title: '日期',
        icon: <CalendarOutlined />,
        params: [
          { label: '年月日', value: 'yyyy年MM月dd日' },
          { label: '年/月/日', value: 'yyyy/MM/dd' },
          { label: '年-月-日', value: 'yyyy-MM-dd' },
        ],
      },
      {
        key: 'month',
        title: '月份',
        icon: <FillMonth />,
        params: [
          { label: '中文', value: 'zh' },
          { label: '英文', value: 'en' },
          { label: '英文简写', value: 'abbr' },
        ],
      },
      {
        key: 'week',
        title: '星期',
        icon: <FillWeek />,
        params: [
          { label: '中文', value: 'zh' },
          { label: '英文', value: 'en' },
          { label: '英文简写', value: 'abbr' },
        ],
      },
      // {
      //   key: 'timestamp',
      //   title: '时间戳',
      // },
    ],
  },
  {
    key: 'address',
    title: '地址',
    icon: <EnvironmentOutlined />,
    children: [
      { key: 'country', title: '国家和地区', icon: <FillCountry /> },
      { key: 'province', title: '省份' },
      { key: 'city', title: '城市', icon: <FillCity /> },
    ],
  },
];

export default fillDefaultConfig;
