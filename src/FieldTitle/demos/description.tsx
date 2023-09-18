import { ProCard } from '@ant-design/pro-components';
import { APIFieldType, FieldTitle } from '@ant-design/pro-editor';

const Demo = () => {
  return (
    <ProCard ghost gutter={[8, 8]} wrap>
      <ProCard layout="center" bordered colSpan={24} title="描述" subTitle="描述在标题右边">
        <FieldTitle type={APIFieldType.bool} title="success" description="成功标识" />
      </ProCard>
    </ProCard>
  );
};

export default Demo;
