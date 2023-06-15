import { ReactNode } from 'react';

/**
 * @description 菜单项的类型，可以是普通菜单项、子菜单、菜单分割线
 */
export type MenuItemType = GeneralItemType | SubMenuType | MenuDividerType;

/**
 * @description 通用的菜单项类型
 */
export interface CommonType {
  /**
   * @description 菜单项的唯一标识
   */
  key: string;
  /**
   * @description 菜单项的文本标签
   */
  label: string;
  /**
   * @description 菜单项的图标
   */
  icon?: ReactNode;
  /**
   * @description 菜单项的点击事件回调函数
   */
  onClick?: () => void;
}

/**
 * @description 普通菜单项类型
 */
export interface GeneralItemType extends CommonType {
  /**
   * @description 是否为危险操作
   */
  danger?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 快捷键
   */
  shortcut?: ('meta' | 'control' | 'shift' | 'alt' | string)[];
}

/**
 * @description 子菜单类型
 */
export interface SubMenuType extends CommonType {
  /**
   * @description 子菜单的子菜单项
   */
  children: MenuItemType[];
}

/**
 * @description 菜单分割线类型
 */
export interface MenuDividerType {
  /**
   * @description 菜单分割线的样式是否为虚线
   */
  dashed?: boolean;
  /**
   * @description 菜单分割线的类型
   */
  type: 'divider';
}
