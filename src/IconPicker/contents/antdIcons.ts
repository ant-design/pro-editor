import * as AntdIcon from '@ant-design/icons';
import type { ReactIcon } from 'c2d2c-types';

const list = Object.keys(AntdIcon).filter(
  (key) => key.endsWith('Outlined') || key.endsWith('Filled'),
);

const antdIconList: ReactIcon[] = list.map((componentName) => ({
  type: 'antd',
  componentName,
}));

export { antdIconList };

export default AntdIcon;
