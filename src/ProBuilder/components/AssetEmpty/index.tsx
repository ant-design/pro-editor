import { Empty } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import { createStyles } from '../../../theme';

import { useStore } from '../../store';

const useStyles = createStyles(({ token, css, cx }, prefixCls) => ({
  cls: cx(
    `${prefixCls}-empty`,
    css`
      height: 100%;
      background: ${token.colorBgLayout};
    `,
  ),
}));

const AssetEmpty: FC = memo(() => {
  const { prefixCls } = useStore();

  const { styles } = useStyles(prefixCls);

  return (
    <Center className={styles.cls}>
      <Empty description={'未找到 ComponentAsset，请在 props 中传入 ComponentAsset'} />
    </Center>
  );
});

export default AssetEmpty;
