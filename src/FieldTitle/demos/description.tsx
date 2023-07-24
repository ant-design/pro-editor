import { ProCard } from '@ant-design/pro-components';
import { APIFieldType, FieldTitle } from '@ant-design/pro-editor';

const Demo = () => {
  return (
    <ProCard ghost gutter={[8, 8]} wrap>
      <ProCard layout="center" bordered colSpan={24} title="描述" subTitle="描述在标题右边">
        <FieldTitle type={APIFieldType.bool} title="success" description="成功标识" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={24} title="额外" subTitle="额外内容在字段下面">
        <FieldTitle type={APIFieldType.bool} title="success" extra="额外内容" />
      </ProCard>
      <ProCard
        layout="center"
        bordered
        colSpan={24}
        title="可选"
        subTitle="可选为false 则额外内容左侧有 padding"
      >
        <FieldTitle type={APIFieldType.bool} title="success" extra="额外内容" checkable={false} />
      </ProCard>
    </ProCard>
  );
};

export default Demo;
