/**
 * title: 预设
 * description: 一些编辑器常用按钮的预设
 */
import { CollapseAction, DeleteAction, EditAction, HandleAction } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space>
    <DeleteAction title="删除按钮" />
    <EditAction title="编辑按钮" />
    <HandleAction title="拖动按钮" />
    <CollapseAction title="收起按钮" />
  </Space>
);
