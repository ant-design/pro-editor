import type { IconUnit } from '@ant-design/pro-editor';
import { IconPicker } from '@ant-design/pro-editor';
import { useState } from 'react';

export const Demo = () => {
  const [icon, setIcon] = useState<IconUnit>();

  return (
    <IconPicker
      icon={icon}
      onIconChange={setIcon}
      defaultActiveIconfontScript={
        'https://gw.alipayobjects.com/os/hitu-asset/artists/trusple/icons-1.3.19.js'
      }
      iconfontScripts={[
        {
          url: 'https://gw.alipayobjects.com/os/hitu-asset/artists/trusple/icons-1.3.19.js',
          name: 'Iconfont',
        },
      ]}
    />
  );
};

export default Demo;
