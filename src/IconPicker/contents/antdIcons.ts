import type { ReactIcon } from '@alipay/c2d2c-types';
import * as AntdIcon from '@ant-design/icons';

const list = Object.keys(AntdIcon).filter(
  (key) => key.endsWith('Outlined') || key.endsWith('Filled'),
);

const antdIconList: ReactIcon[] = list.map((componentName) => ({
  type: 'antd',
  componentName,
}));

export { antdIconList };

export default AntdIcon;
