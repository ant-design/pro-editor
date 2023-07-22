import { antdIconList } from '../contents/antdIcons';
import type { ExternalScripts, IconfontIcon, IconUnit, ReactIcon } from '../types';

export interface State {
  /**
   * @title IconFont 脚本地址
   */
  iconfontScripts: ExternalScripts[];
  /**
   * @title 外部传入的 IconFont 脚本
   */
  outsourceIconfontScripts?: ExternalScripts[];
  /**
   * @title 图标单元
   */
  icon?: IconUnit;
  /**
   * @title 是否显示表单
   */
  showForm: boolean;
  /**
   * @title 是否开启面板
   */
  open: boolean;
  /**
   * @title 面板选项卡键值
   * @enum ['antd', 'iconfont']
   * @enumNames ['Antd', 'Iconfont']
   */
  panelTabKey: 'antd' | 'iconfont';
  /**
   * @title 图标过滤关键词
   */
  filterKeywords?: string;
  /**
   * @title 选中的 Iconfont 脚本
   */
  activeIconfontScript?: string;
  /**
   * @title Antd 图标列表
   */
  antdIconList: ReactIcon[];
  /**
   * @title Iconfont 图标列表
   */
  iconfontIconList: IconfontIcon[];

  // 外部状态
  /**
   * @title Icon 改变回调函数
   * @param icon - 改变后的 IconUnit 对象
   */
  onIconChange?: (icon: IconUnit) => void;
  /**
   * @title Iconfont 脚本改变回调函数
   * @param iconfontScripts - 改变后的 Iconfont 脚本数组
   */
  onIconfontScriptsChange?: (iconfontScripts: ExternalScripts[]) => void;
  /**
   * @title 选中的 Iconfont 脚本改变回调函数
   * @param scripts - 选中的 Iconfont 脚本
   */
  onActiveIconfontScriptChange?: (scripts: string) => void;
}

export const initialState: State = {
  open: false,
  showForm: false,
  panelTabKey: 'antd',
  filterKeywords: '',
  antdIconList,
  icon: null,
  iconfontScripts: [],
  outsourceIconfontScripts: undefined,
  onIconfontScriptsChange: null,
  iconfontIconList: [],
  onIconChange: null,
};
