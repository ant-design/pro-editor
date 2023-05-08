import type { IconUnit } from '@ant-design/pro-editor';
import { IconPicker } from '@ant-design/pro-editor';
import { Button, Divider, Space } from 'antd';
import { useState } from 'react';

export const Demo = () => {
  const [icon, setIcon] = useState<IconUnit>();
  const [activeScript, setScript] = useState<string>();
  const [iconfontScripts, setIconfontScripts] = useState<any[]>();
  return (
    <>
      <IconPicker
        icon={icon}
        onIconChange={setIcon}
        activeIconfontScript={activeScript}
        onActiveIconfontScriptChange={setScript}
        iconfontScripts={iconfontScripts}
        onIconfontScriptsChange={setIconfontScripts}
      />
      <Divider />
      图标：{JSON.stringify(icon)}
      <Divider />
      激活脚本：{activeScript}
      <Divider />
      Iconfont 图标库集合：{JSON.stringify(iconfontScripts, null, 2)}
      <Divider />
      <Space>
        <Button
          onClick={() => {
            setIcon({
              type: 'antd',
              componentName: 'AlipayCircleFilled',
            });
          }}
        >
          切换为 antd 的 AlipayCircleFilled
        </Button>

        <Button
          onClick={() => {
            setIcon(null);
          }}
        >
          清空图标
        </Button>
        {/*<Button*/}
        {/*  onClick={() => {*/}
        {/*    setIcon({*/}
        {/*      type: 'iconfont',*/}
        {/*      componentName: 'Iconfo',*/}
        {/*      props: {*/}
        {/*        type: 'icon-tt-collection-account',*/}
        {/*      },*/}
        {/*      scriptUrl:*/}
        {/*        'https://gw.alipayobjects.com/os/hitu-asset/artists/trusple/icons-1.3.19.js',*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  切换为 iconfont 的某个图标*/}
        {/*</Button>*/}
      </Space>
    </>
  );
};

export default Demo;
