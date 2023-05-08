import type { FC } from 'react';
import { memo } from 'react';
import { css, cx } from '../../../theme';

import { useStore } from '../../store';
import IconThumbnail from './IconThumbnail';

import { displayListSelector } from '../../../IconPicker/store';
import { getIconName } from '../../utils';

const IconList: FC = () => {
  const displayList = useStore(displayListSelector);

  return (
    <div
      className={cx(css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      `)}
    >
      {displayList.map((icon) => (
        <IconThumbnail key={getIconName(icon)} icon={icon} />
      ))}
    </div>
  );
};

export default memo(IconList);
