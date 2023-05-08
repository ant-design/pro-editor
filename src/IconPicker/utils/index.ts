import type { IconUnit } from '../types';

export const getIconName = (icon: IconUnit) => {
  switch (icon.type) {
    case 'antd':
    case 'custom':
      return icon.componentName;
    case 'iconfont':
      return icon.props.type;
  }
};

export { createFromIconfontCN } from '@ant-design/icons';
