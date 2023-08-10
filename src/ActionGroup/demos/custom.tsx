import { ActionGroup } from '@ant-design/pro-editor';
import { Card, Input, Rate, Switch } from 'antd';

export default () => {
  return (
    <ActionGroup
      render={(defalutDom) => {
        return (
          <Card
            title="操作工具箱"
            extra={<Switch defaultChecked />}
            style={{ width: 300 }}
            size="small"
          >
            <p>工具</p>
            {defalutDom}
            <p>内容</p>
            <Input placeholder="请输入编辑器内容" />
            <p>评分</p>
            <Rate allowHalf defaultValue={2.5} />
          </Card>
        );
      }}
    />
  );
};
