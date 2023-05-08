/**
 * 生成的唯一 id 的字符串
 */
export const genUniqueId = (prefix?: string | number) =>
  `${prefix}${Math.round(Math.random() * 1000).toString(16)}`;
