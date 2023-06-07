import Avatar from './Avatars/Avatar';
import Basic from './Awareness';
import Cursor from './Cursors/Cursor';

export type IAwareness = typeof Basic & {
  Cursor: typeof Cursor;
  Avatar: typeof Avatar;
};

const Awareness = Basic as IAwareness;

Awareness.Cursor = Cursor;
Awareness.Avatar = Avatar;

export default Awareness;
