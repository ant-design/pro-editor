export interface CategoryBaseField {
  title?: string;
  description?: string;
  defaultActive?: boolean;
}
/**
 * 目录分类
 * 默认包含 四个分类
 * type:  '类型'
 * content: '内容'
 * style: '样式'
 * status:  '状态'
 */
export type CategoryConfig = Record<string, CategoryBaseField>;

export enum CategoryMap {
  type = 'type',
  content = 'content',
  function = 'function',
  style = 'style',
  status = 'status',
  bind = 'bind',
  table = 'table',
  customStyle = 'customStyle',
}

export const configCategoryMap: CategoryConfig = {
  [CategoryMap.type]: { title: '类型', defaultActive: true },
  [CategoryMap.content]: { title: '内容与功能', defaultActive: true },
  [CategoryMap.style]: { title: '样式', defaultActive: true },
  [CategoryMap.status]: { title: '状态', defaultActive: true },
  [CategoryMap.bind]: { title: '分页字段绑定', defaultActive: true },
  [CategoryMap.table]: { title: '表格要素', defaultActive: true },
  [CategoryMap.customStyle]: { title: '自定义样式', defaultActive: true },
};
