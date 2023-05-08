import ActionIcon from '../../ActionIcon';
import { css, cx, useToken } from '../../theme';
import { useStore } from '../store';

import IconItem from './IconRender';

const Display = () => {
  const token = useToken();
  const { icon, togglePanel } = useStore();

  const DefaultIcon = (
    <div
      className={cx(css`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${token.colorFillContent};
      `)}
    />
  );

  return (
    <ActionIcon
      onClick={togglePanel}
      icon={!icon ? DefaultIcon : <IconItem {...icon} />}
    />
  );
};

export default Display;
