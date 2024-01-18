import {
  CloseCircleFilled,
  ExclamationCircleFilled,
  FieldTimeOutlined,
  FolderAddOutlined,
  MinusCircleFilled,
} from '@ant-design/icons';
import { ActionGroup, ActionIcon, Button, EditorLayout, Input } from '@ant-design/pro-editor';
import { Divider, Dropdown, Image, Space, message } from 'antd';
import { DefaultLayoutProps } from './_defaultProps';
import SessonList from './components/sessinList';

export default () => {
  const [messageApi, contextHolder] = message.useMessage();

  const LeftActions = () => (
    <ActionGroup
      type="pure"
      items={[
        {
          icon: (
            <CloseCircleFilled
              style={{
                color: 'rgb(206,68,61)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          onClick: () => {
            messageApi.info('正在关闭程序 ing！');
          },
          label: '关闭程序',
        },
        {
          icon: (
            <MinusCircleFilled
              style={{
                color: 'rgb(280,135,53)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          label: '关闭程序',
        },
        {
          icon: (
            <ExclamationCircleFilled
              style={{
                color: 'rgb(96,185,56)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          label: '详细提示',
        },
      ]}
    />
  );

  return (
    <>
      {contextHolder}
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
          border: '1px solid #e3e3e3',
          boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        }}
        header={{
          ...DefaultLayoutProps.header,
          style: {
            backgroundColor: 'rgba(32,121,242,0.05)',
          },
          themeType: 'pure',
          children: (
            <>
              <Dropdown
                trigger={['click']}
                menu={{
                  items: [
                    {
                      label: 'Julie Nolke',
                      key: '1',
                    },
                    {
                      label: 'Bill Jhon',
                      key: '2',
                    },
                    {
                      icon: '',
                      label: 'Mike Jhonson',
                      key: '3',
                    },
                  ],
                }}
              >
                <ActionIcon icon={<FieldTimeOutlined />} title="最近使用" />
              </Dropdown>
              <Input placeholder="Search For Some Dialog" style={{ width: 250 }} />
            </>
          ),
          extra: (
            <Space>
              <Button type="primary">Save</Button>
              <Button type="dashed">
                <FolderAddOutlined />
              </Button>
            </Space>
          ),
          iconConfig: {
            ...DefaultLayoutProps.header.iconConfig,
            title: '靓仔/妹',
            icon: (
              <Image
                preview={false}
                width={26}
                style={{
                  borderRadius: '50%',
                }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            ),
            render: (props, defalutDom) => {
              return (
                <>
                  <LeftActions />
                  {defalutDom}
                  <Divider type="vertical" />
                  😄 天选之子
                </>
              );
            },
          },
        }}
        type="LeftFull"
        footer={false}
        rightPannel={false}
        leftPannel={{
          style: {
            padding: '0px',
          },
          children: <SessonList />,
        }}
      />
    </>
  );
};
