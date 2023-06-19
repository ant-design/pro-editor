import Avatar from './Avatars/Avatar';

import { lazy, Suspense } from 'react';
import { AwarenessProps } from './Awareness';
import Cursor from './Cursors/Cursor';

export type { AwarenessProps } from './Awareness';

const Basic = lazy(() => import('./Awareness'));

const Awareness = (props: AwarenessProps) => {
  return (
    <Suspense>
      <Basic {...props} />
    </Suspense>
  );
};

Awareness.Cursor = Cursor;
Awareness.Avatar = Avatar;

export default Awareness;
