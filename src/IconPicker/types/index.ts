/**
 * 外部的图标 url
 */
export interface ExternalScripts {
  /**
   * 名称
   */
  name: string;
  /**
   * URL
   */
  url: string;
}

export interface ReactIcon {
  type: 'antd' | 'custom';
  componentName: string;
  props?: object;
}

export interface IconfontIcon {
  type: 'iconfont';
  componentName: string;
  props: {
    type: string;
  };
  scriptUrl?: string;
}

/**
 * 最基础的图标信息单元
 */
export type IconUnit = ReactIcon | IconfontIcon;
