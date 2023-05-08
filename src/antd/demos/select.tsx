import { Select } from '@ant-design/pro-editor';
import { Card } from 'antd';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Card title={'Select'}>
    <Flexbox gap={12}>
      <Flexbox horizontal gap={16}>
        默认
        <Select placeholder={'请输入'} style={{ width: 120 }} />
        <Select value={'123'} style={{ width: 120 }} />
      </Flexbox>
      <Flexbox horizontal gap={16}>
        小尺寸
        <Select size={'small'} placeholder={'请输入'} style={{ width: 120 }} />
        <Select size={'small'} value={'123'} style={{ width: 120 }} />
      </Flexbox>
    </Flexbox>
  </Card>
);
