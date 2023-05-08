/* eslint no-case-declarations: 0 */
import type { FC } from 'react';
import { memo } from 'react';
import AntdIcons from '../contents/antdIcons';
import { customIconList, registerCustomIcon } from '../contents/customIcons';

export interface IconRenderProps {
  type: 'antd' | 'iconfont' | 'custom';
  componentName?: string;
  props?:
    | {
        type?: string;
      }
    | any;
  scriptUrl?: string;
}

export interface IIconRender {
  (props: IconRenderProps): JSX.Element;

  /**
   * 注册自定义图标
   */
  registerCustomIcon: typeof registerCustomIcon;
}

const Render: FC<IconRenderProps> = memo(
  ({ type, componentName, props, scriptUrl }) => {
    switch (type) {
      case 'custom':
        const CustomIcon = customIconList[componentName];
        return <CustomIcon {...props} />;

      case 'antd':
        const Icon = AntdIcons[componentName];
        return <Icon {...props} />;

      case 'iconfont':
        const Iconfont = AntdIcons.createFromIconfontCN({
          scriptUrl,
        });
        return <Iconfont {...props} />;
    }
  },
);

const IconIRender = Render as IIconRender;

IconIRender.registerCustomIcon = registerCustomIcon;

export default IconIRender;
