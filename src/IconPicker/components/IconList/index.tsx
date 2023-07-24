import type { FC } from 'react';
import { memo } from 'react';
import { createStyles } from '../../../theme';

import { useStore } from '../../store';
import IconThumbnail from './IconThumbnail';

import { displayListSelector } from '../../store';
import { getIconName } from '../../utils';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const useStyles = createStyles(
  ({ css }) =>
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    `,
);

/******************************************************
 ************************* Dom *************************
 ******************************************************/

const IconList: FC = () => {
  const displayList = useStore(displayListSelector);

  const { styles } = useStyles();

  return (
    <div className={styles}>
      {displayList.map((icon) => (
        <IconThumbnail key={getIconName(icon)} icon={icon} />
      ))}
    </div>
  );
};

export default memo(IconList);
