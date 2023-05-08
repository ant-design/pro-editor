import { DeleteFilled, EditFilled } from '@ant-design/icons';
import type { FC } from 'react';

import type { ActionIconProps } from './ActionIcon';
import ActionIcon from './ActionIcon';

export type IconsProps = Omit<ActionIconProps, 'icon'>;

const HandleIcon = (
  <svg viewBox="0 0 20 20" width="16" fill="currentColor">
    <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
  </svg>
);

const CollapseIcon = (
  <svg width="10" viewBox="0 0 70 41" fill="currentColor">
    <path d="M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z" />
  </svg>
);

export const CollapseAction: FC<IconsProps> = (props) => (
  <ActionIcon icon={CollapseIcon} {...props} />
);

export const HandleAction: FC<IconsProps> = (props) => (
  <ActionIcon icon={HandleIcon} {...props} />
);

export const DeleteAction: FC<IconsProps> = (props) => (
  <ActionIcon icon={<DeleteFilled />} {...props} />
);

export const EditAction: FC<IconsProps> = (props) => (
  <ActionIcon icon={<EditFilled />} {...props} />
);
