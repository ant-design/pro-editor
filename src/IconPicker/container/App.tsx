import { Popover } from 'antd';
import type { FC } from 'react';

import Display from '../features/Display';
import PickerPanel from '../features/PickerPanel';

import { useStore, useStoreApi } from '../store';

const App: FC = () => {
  const open = useStore((s) => s.open);
  const storeApi = useStoreApi();

  return (
    <Popover
      onOpenChange={(e) => {
        storeApi.setState({ open: e });
      }}
      placement={'bottomLeft'}
      showArrow={false}
      open={open}
      trigger={'click'}
      content={<PickerPanel />}
    >
      <Display />
    </Popover>
  );
};

export default App;
