import type { FC } from 'react';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStore } from '../../store';
import { useStyle } from './style';

interface TitleProps {
  title: string;
  dataKey: string;
}

const Title: FC<TitleProps> = ({ title, dataKey }) => {
  const demoData = useStore((s) => s.demoData);
  const demoKey = useStore((s) => s.demoKey);

  const { styles } = useStyle();

  return (
    <Flexbox horizontal gap={8}>
      <Flexbox style={{ whiteSpace: 'nowrap' }}>{title}</Flexbox>
      <span className={styles.demo}>{demoKey === dataKey && demoData}</span>
    </Flexbox>
  );
};

export default memo(Title);
