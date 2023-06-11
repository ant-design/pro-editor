import type { FC } from 'react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Canvas from '../Canvas';
import Code from '../Code';
import { Controller } from '../Controller';
import Empty from './Empty';

import { isDesignModeSelector, useStore } from '../../store';
import { useStyles } from './style';

export const Stage: FC<{
  hideNavbar: boolean;
  onCopy?: (children: any) => void;
  prefixCls?: string;
}> = memo(({ hideNavbar, onCopy, prefixCls }) => {
  const isStarter = useStore((x) =>
    x.componentAsset.componentStore((s) => x.componentAsset.isStarterMode(s)),
  );
  const isDesignMode = useStore(isDesignModeSelector);

  const { styles } = useStyles(prefixCls);

  return (
    <div
      className={styles.container}
      style={{
        height: hideNavbar ? '100%' : `calc(100% - 46px)`,
      }}
    >
      <Flexbox height={'100%'}>
        {isStarter ? <Empty /> : <Canvas />}
        <Controller />
        {isDesignMode ? null : <Code onCopy={onCopy} />}
      </Flexbox>
    </div>
  );
});

export default Stage;
