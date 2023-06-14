import { Button } from 'antd';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { useStore } from './store';

export const ButtonComponent = memo(() => {
  const store = useStore((s) => s.content, isEqual);

  console.log(store);
  return <Button {...store} />;
});
