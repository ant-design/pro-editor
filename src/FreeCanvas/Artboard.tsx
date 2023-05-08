import type { FC, ReactNode } from 'react';
import { useStyle } from './style';

const Artboard: FC<{ data: ReactNode }> = ({ data }) => {
  const { styles } = useStyle();

  return <div className={styles.canvas}>{data}</div>;
};

export default Artboard;
