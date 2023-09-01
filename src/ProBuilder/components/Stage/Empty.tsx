import { Empty } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import { useStore } from '../../store';

import { Center } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';
import { useStyle } from './Empty.style';

const Starter: FC = memo(() => {
  const [componentAsset] = useStore((s) => [s.componentAsset], shallow);

  const { styles } = useStyle();

  return (
    <Center className={styles.container}>
      {componentAsset.CanvasStarter ? (
        <componentAsset.CanvasStarter />
      ) : (
        <Empty
          image={<img src="https://gw.alipayobjects.com/zos/antfincdn/rxat8ds3j/empty.svg" />}
          imageStyle={{
            height: 210,
            marginBottom: 32,
          }}
          className={styles.default}
          description={'暂无配置信息，请从右侧面板开始编辑'}
        />
      )}
    </Center>
  );
});

export default Starter;
