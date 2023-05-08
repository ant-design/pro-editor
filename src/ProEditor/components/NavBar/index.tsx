import { Space } from 'antd';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { useStore } from '../../store';
import { useStyle } from './style';

export interface NavBarProps {
  /**
   * 替换logo
   */
  logo?: ReactNode;
}

const NavBar: FC<NavBarProps> = memo(({ logo }) => {
  const prefixCls = useStore((s) => s.prefixCls, shallow);

  const { styles } = useStyle(`${prefixCls}-navbar`);

  const defaultLogo = (
    <Space>
      <img
        src="https://gw.alipayobjects.com/zos/hitu-asset/2661db12-eeeb-4f61-a285-0d066ac68e52/hitu-1617880447900-image.png"
        alt="TechUI Studio"
        className={styles.img}
      />
      <div style={{ fontSize: 16 }}>TechUI Studio</div>
    </Space>
  );

  return (
    <Flexbox
      horizontal
      align={'center'}
      height={46}
      padding={'0 24px'}
      distribution={'space-between'}
      className={styles.container}
    >
      <div className={styles.logo}>{logo ?? defaultLogo}</div>
    </Flexbox>
  );
});

export default NavBar;
