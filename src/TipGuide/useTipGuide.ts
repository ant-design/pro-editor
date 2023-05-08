import { useLocalStorageState } from 'ahooks';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useCallback, useState } from 'react';

export const useTipGuide = (guideKey: string) => {
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(true);

  const [noLongerShow, setNoLongerShow] = useLocalStorageState(guideKey, {
    defaultValue: false,
  });

  const closeGuide = useCallback(() => {
    setVisible(false);

    if (checked) {
      setNoLongerShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const toggleChecked = useCallback((e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  }, []);

  return { visible, noLongerShow, closeGuide, toggleChecked, checked };
};
