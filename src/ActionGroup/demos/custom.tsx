import { ActionGroup, ActionIcon } from '@ant-design/pro-editor';
import { Card, Input, Rate, Switch } from 'antd';

export default () => {
  return (
    <ActionGroup
      render={(config) => {
        return (
          <Card
            title="操作工具箱"
            extra={<Switch defaultChecked />}
            style={{ width: 300 }}
            size="small"
          >
            <p>工具</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {config.map((item, index) => {
                return (
                  <ActionIcon
                    key={`action-btn-${index}`}
                    title={item?.label}
                    onClick={() => {
                      alert('触发动作');
                    }}
                    {...item}
                  />
                );
              })}
            </div>
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
