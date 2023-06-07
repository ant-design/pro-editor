import { memo } from 'react';
import type { WebrtcProvider } from 'y-webrtc';

import Avatars from './Avatars';
import Cursors from './Cursors';

import { createStore, Provider } from './store';

export interface AwarenessProps {
  /**
   * 协同所使用的 provider
   */
  provider: WebrtcProvider;
  /**
   * 是否显示 avatars
   */
  avatars?: boolean;
  /**
   * 是否显示用户游标
   */
  cursors?: boolean;
}

const Awareness = memo<AwarenessProps>(({ provider, avatars = true, cursors = true }) => (
  <Provider createStore={() => createStore(provider)}>
    {cursors && <Cursors />}
    {avatars && <Avatars />}
  </Provider>
));

export default Awareness;
