import { Empty } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
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
    <div className={styles.cls}>
      <Empty description={'未找到 ComponentAsset，请在 props 中传入 ComponentAsset'} />
    </div>
  );
});

export default AssetEmpty;
