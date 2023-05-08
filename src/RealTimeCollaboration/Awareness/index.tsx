import type { FC } from 'react';
import type { WebrtcProvider } from 'y-webrtc';

import Avatars from './Avatars';
import Cursors from './Cursors';

import { memo } from 'react';
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

const Awareness: FC<AwarenessProps> = ({
  provider,
  avatars = true,
  cursors = true,
}) => (
  <Provider createStore={() => createStore(provider)}>
    {cursors && <Cursors />}
    {avatars && <Avatars />}
  </Provider>
);

export default memo(Awareness);
