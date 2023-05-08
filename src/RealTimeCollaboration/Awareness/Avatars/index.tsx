import { Avatar as A } from 'antd';
import { memo } from 'react';

import Avatar from './Avatar';

import { useStore } from '../store';

const Avatars = memo(() => {
  const awarenessStates = useStore((s) => s.awarenessStates);

  return (
    <A.Group>
      {awarenessStates?.map(
        (state, index) =>
          state && <Avatar key={`${state.user}-${index}`} {...state} />,
      )}
    </A.Group>
  );
});

export default Avatars;
