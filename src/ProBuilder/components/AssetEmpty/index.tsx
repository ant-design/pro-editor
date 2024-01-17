import { Empty } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import { createStyles } from '../../../theme';

const useStyles = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}-pro-builder`;
  return {
    cls: cx(
      `${prefix}-empty`,
      css`
        height: 100%;
        background: ${token.colorBgLayout};
      `,
    ),
  };
});

const AssetEmpty: FC = memo(() => {
  const { styles } = useStyles();

  return (
    <Center className={styles.cls}>
      <Empty description={'未找到 ComponentAsset，请在 props 中传入 ComponentAsset'} />
    </Center>
  );
});

export default AssetEmpty;
