import { useHotkeys } from 'react-hotkeys-hook';
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';

export const useHotkeyManager = () => {
  const [undo, redo] = useStore((s) => [s.undo, s.redo], shallow);

  useHotkeys('meta+z', (e) => {
    e.preventDefault();
    undo();
  });

  useHotkeys('meta+shift+z', (e) => {
    e.preventDefault();

    redo();
  });
};
