/**
 * 从 Iconfont 的 js 中抽取图标列表
 * @param jsText
 */

export const extractListFormIconfontJS = (jsText: string): string[] => {
  // https://regex101.com/r/ZxzbHb/1
  const regex = /<symbol id="((?:\w|-)*)"/g;

  return Array.from(jsText.matchAll(regex)).map((i) => i[1]);
};

/**
 * 从 List 中找到临近的有效 index
 * @param list
 * @param currentIndex
 */
export const findNeighborIndex = (list: any[], currentIndex: number) => {
  return currentIndex === 0
    ? 0
    : list.length <= currentIndex + 1
    ? currentIndex - 1
    : currentIndex;
};
