import type { FC } from 'react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { createStyles } from '../../../theme';
import type { IconUnit } from '../../types';

import IconItem from '../../features/IconRender';
import { useStore } from '../../store';
import { getIconName } from '../../utils';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const useStyles = createStyles(
  ({ token, css }) =>
    css`
      height: 48px;
      width: 100%;
      overflow: hidden;

      box-shadow: 1px 0 0 0 ${token.colorBorderSecondary}, 0 1px 0 0 ${token.colorBorderSecondary},
        1px 1px 0 0 ${token.colorBorderSecondary}, 1px 0 0 0 ${token.colorBorderSecondary} inset,
        0 1px 0 0 ${token.colorBorderSecondary} inset;
      background: ${token.colorBgContainer};

      cursor: pointer;

      font-size: 18px;
      color: ${token.colorTextSecondary};

      &:hover {
        border: 1px solid ${token.colorBorder};
        box-shadow: none;
      }

      &:active {
        z-index: 5;
        border: 1px solid ${token.colorPrimary};
        border-radius: 2px;
        box-shadow: 0 1px 2px ${token.colorPrimary};
      }
    `,
);

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IconBlockProps {
  icon: IconUnit;
  IconSource?;
  createFromIconfont?: any;
}

const IconThumbnail: FC<IconBlockProps> = ({ icon }) => {
  const selectIcon = useStore((s) => s.selectIcon);

  const { styles, cx } = useStyles();
  return (
    <Flexbox
      className={cx('icon-box', styles)}
      title={getIconName(icon)}
      align={'center'}
      distribution={'center'}
      onClick={() => {
        selectIcon(icon);
      }}
    >
      <IconItem {...icon} />
    </Flexbox>
  );
};

export default memo(IconThumbnail);
