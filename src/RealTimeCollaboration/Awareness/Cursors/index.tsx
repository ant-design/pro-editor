import Color from 'color';
import isEqual from 'lodash.isequal';
import { memo } from 'react';
import { styled } from '../../../theme';

import Cursor from './Cursor';

import type { AwarenessState } from '../store';
import { useStore } from '../store';

const Container = styled.div<{ x?: number; y?: number }>`
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  z-index: 5000;
`;

const NameTip = styled.div<{
  isLight?: boolean;
}>`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 12px;
  max-width: 96px;
  padding: 2px 12px;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.isLight ? 'black' : 'white')};
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Cursors = memo(() => {
  const awarenessStates = useStore<AwarenessState[]>(
    (s) =>
      s.awarenessStates?.filter(
        (a) => a.active && a.user.name !== s.currentUser,
      ),
    isEqual,
  );

  return (
    <>
      {awarenessStates?.map((a) => {
        const { cursor, user } = a;
        return (
          <Container key={user.name} {...cursor} color={user.color}>
            <Cursor color={user.color} />
            <NameTip color={user.color} isLight={Color(user.color).isLight()}>
              {user.name}
            </NameTip>
          </Container>
        );
      })}
    </>
  );
});

export default Cursors;
