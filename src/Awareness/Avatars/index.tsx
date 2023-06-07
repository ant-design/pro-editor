import { Avatar as A } from 'antd';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';
import Avatar from './Avatar';

const AvatarWrapper = ({ id, name, color, active }) => {
  const [followUser, currentUser, setFollowUser] = useStore(
    (s) => [s.followUser, s.currentUser, s.setFollowUser],
    shallow,
  );

  const current = currentUser === id;
  const following = followUser && followUser === id;
  return (
    <Avatar
      name={name}
      current={current}
      following={following}
      color={color}
      active={active}
      onClick={() => {
        if (current) return;

        if (following) {
          setFollowUser(undefined);
        } else {
          setFollowUser(id);
        }
      }}
    />
  );
};

const Avatars = memo(() => {
  const awarenessStates = useStore((s) => s.awarenessStates);

  return (
    <A.Group>
      {awarenessStates?.filter(Boolean).map(({ user, active }, index) => (
        <AvatarWrapper active={active} key={`${user.id}-${index}`} {...user} />
      ))}
    </A.Group>
  );
});

export default Avatars;
