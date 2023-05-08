import type { FC } from 'react';

export type CustomIconList = Record<string, FC>;

export const customIconList: CustomIconList = {};

export const registerCustomIcon = (icons: CustomIconList) => {
  Object.entries(icons).forEach(([componentName, Fn]) => {
    if (customIconList[componentName]) return;
    customIconList[componentName] = Fn;
  });
};
