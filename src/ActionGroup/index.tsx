import { DeleteOutlined, FullscreenOutlined, RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { getPrefixCls } from '@ant-design/pro-editor';
import { Button, Space } from 'antd';
import { useStyle } from './style';

type ButtonConfig = {
  /**
   * @description 展示的 icon
   */
  icon: React.ReactNode;
  /**
   * @description 样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description 每个按钮单独的key
   */
  key?: string;
  /**
   * @description 按钮点击事件的回掉
   */
  onClick?: () => void;
};

interface ActionGroupProps {
  /**
   * @description 自定义的classname
   * @ignore
   */
  className?: string;
  /**
   * @description 样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description 生成按钮的配置config
   */
  config?: Array<ButtonConfig>;
  /**
   * @description 用于渲染自定义能力的render方法
   */
  render?: (defalutDom: React.ReactNode, config: Array<ButtonConfig>) => React.ReactNode;
  /**
   * @description 全屏按钮点击的回掉
   */
  onFullScreenClick?: () => void;
  /**
   * @description 撤销按钮点击的回掉
   */
  onUndoClick?: () => void;
  /**
   * @description 重做按钮点击的回掉
   */
  onRedoClick?: () => void;
  /**
   * @description 删除按钮点击的回掉
   */
  onDeleteClick?: () => void;
}

const ActionGroup = (props: ActionGroupProps) => {
  const prefixCls = getPrefixCls('action-group');
  const { styles, cx } = useStyle(prefixCls);
  const {
    className,
    style,
    render,
    config: outConfig,
    onFullScreenClick,
    onUndoClick,
    onRedoClick,
    onDeleteClick,
  } = props;
  const config = outConfig
    ? outConfig
    : [
        { icon: <FullscreenOutlined />, onClick: onFullScreenClick },
        { icon: <UndoOutlined />, onClick: onUndoClick },
        { icon: <RedoOutlined />, onClick: onRedoClick },
        { icon: <DeleteOutlined />, onClick: onDeleteClick },
      ];

  const ActionDomList = () => {
    const defalutDom = (
      <>
        {config.map((item: ButtonConfig, index) => {
          return <Button key={`action-group-btn-${index}`} type="text" {...item} />;
        })}
      </>
    );
    if (render) {
      return render(defalutDom, config);
    }
    return defalutDom;
  };

  return (
    <div className={cx(styles.content, className)} style={style}>
      <Space>
        <ActionDomList />
      </Space>
    </div>
  );
};

export default ActionGroup;
