import type { IconUnit } from '../../IconPicker';
import type { TreeData } from '../types';

export const initialData: TreeData = [
  {
    id: '1',
    content: { title: 'Home' },
    children: [],
  },
  {
    id: '2',
    content: { title: 'Collections' },
    children: [
      { id: 'Spring', children: [] },
      { id: 'Summer', children: [] },
      { id: 'Fall', children: [] },
      { id: 'Winter', children: [] },
    ],
  },
  {
    id: 'About Us',
    children: [],
  },
  {
    id: 'My Account',
    children: [
      { id: 'Addresses', children: [] },
      { id: 'Order History', children: [] },
    ],
  },
];

export interface MenuContent {
  icon?: IconUnit;
  name: string;
}

export const menuData: TreeData<MenuContent> = [
  {
    id: '1',
    children: [],
    content: {
      name: '首页',
    },
  },
  {
    id: '2',
    content: {
      name: 'Collections',
    },
    children: [
      {
        id: '3',
        content: { name: 'Spring' },
        children: [],
      },
      { id: 'Summer', children: [], content: { name: 'Summer' } },
      { id: 'Fall', children: [], content: { name: 'Fall' } },
      { id: 'Winter', children: [], content: { name: 'Winter' } },
    ],
  },
  {
    id: 'About Us',
    content: { name: 'About Us' },
    children: [],
  },
  {
    id: 'My Account',
    content: { name: 'My Account' },
    children: [
      { id: 'Addresses', children: [], content: { name: 'Addresses' } },
      { id: 'Order History', children: [], content: { name: 'Order History' } },
    ],
  },
];
