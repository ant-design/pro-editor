import type { IconUnit } from '../types';
import type { Store } from './store';

export const isEmptyIconfontScripts = (s: Store) =>
  !s.iconfontScripts || s.iconfontScripts.length === 0;

export const selectedListSelector = (s: Store): IconUnit[] =>
  s.panelTabKey === 'iconfont' ? s.iconfontIconList : s.antdIconList;

export const isEmptyIconList = (s: Store) => {
  const list = selectedListSelector(s);

  return !list || list.length === 0;
};

export const displayListSelector = (s: Store) => {
  const list = selectedListSelector(s);
  const { filterKeywords } = s;

  return list.filter((i) => {
    if (!filterKeywords) return true;

    switch (i.type) {
      case 'antd':
      case 'custom':
        return i.componentName
          .toLowerCase()
          .includes(filterKeywords.toLowerCase());

      case 'iconfont':
        return i.props.type
          .toLowerCase()
          .includes(filterKeywords.toLowerCase());
    }
  });
};

// 如果外部传入 iconfontScripts
// 并且不设置 onChange 方法
// 那么就不能修改图标源
export const iconfontScriptsChangeable = (s: Store) => {
  return !s.outsourceIconfontScripts || !!s.onIconfontScriptsChange;
};
