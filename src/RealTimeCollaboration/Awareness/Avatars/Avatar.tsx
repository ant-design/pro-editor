import { Avatar as A, Badge, Tooltip } from 'antd';
import Color from 'color';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import type { User } from '../store';
import { useStore } from '../store';

interface AvatarProps {
  user: User;
  active: boolean;
}

const Avatar: FC<AvatarProps> = ({ user, active }) => {
  const [followUser, currentUser, setFollowUser] = useStore(
    (s) => [s.followUser, s.currentUser, s.setFollowUser],
    shallow,
  );

  if (!user) return <A />;

  const color = Color(user.color);
  const isFollowedUser = followUser && followUser === user.id;
  const isCurrent = currentUser === user.id;

  return (
    <>
      <Tooltip
        key={user.name}
        title={user.name}
        align={{ offset: [0, 10] }}
        showArrow={false}
      >
        <A
          shape={'circle'}
          style={{
            background: user.color,
            outline: isFollowedUser ? `2px solid ${color}` : '',
            color: color.isLight() ? 'black' : 'inherit',
            zIndex: isFollowedUser ? 1000 : active ? 100 : 0,
            filter: active ? 'none' : 'grayscale(80%)',
            overflow: 'initial',
            cursor: isCurrent ? 'inherit' : 'pointer',
          }}
          onClick={() => {
            if (isCurrent) return;

            if (isFollowedUser) {
              setFollowUser(undefined);
            } else {
              setFollowUser(user.id);
            }
          }}
        >
          {user.name.slice(0, 1)}
          <Badge
            status={active ? 'success' : 'default'}
            color={active ? undefined : '#d9d9d9'}
            style={{ position: 'absolute', left: 11, top: 11 }}
          />
        </A>
      </Tooltip>
    </>
  );
};

export default memo(Avatar);
