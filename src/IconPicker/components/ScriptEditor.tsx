import { withProvider } from '@/ConfigProvider';
import { Button, Form, Input } from 'antd';
import { Flexbox } from 'react-layout-kit';
import { css, cx, useToken } from '../../theme';
import { useStore } from '../store';

const ScriptEditor = () => {
  const { addScript } = useStore();
  const token = useToken();

  return (
    <Flexbox
      className={cx(css`
        padding: 8px;
        border-radius: 8px;
        background: ${token.colorFillQuaternary};
        .ant-form-item {
          margin-bottom: 8px;
        }
      `)}
    >
      <Form
        size={'small'}
        onFinish={(value) => {
          addScript(value);
        }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item name={'url'} required label={'链接'} getValueFromEvent={(e) => e.target.value}>
          <Input placeholder={'iconfont js链接'} />
        </Form.Item>
        <Form.Item
          name={'name'}
          required
          label={'标题'}
          getValueFromEvent={(e) => e.target.value}
          initialValue={'Iconfont'}
        >
          <Input placeholder={'请输入标题'} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }} style={{ marginBottom: 0 }}>
          <Button htmlType={'submit'} type={'primary'}>
            添加
          </Button>
        </Form.Item>
      </Form>
    </Flexbox>
  );
};

export default withProvider(ScriptEditor);
