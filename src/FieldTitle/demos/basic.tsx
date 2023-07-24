import { ProCard } from '@ant-design/pro-components';
import { APIFieldType, FieldTitle } from '@ant-design/pro-editor';

const Demo = () => {
  return (
    <ProCard ghost gutter={[8, 8]} wrap>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.any} title="any" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.any} title="anyArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.bool} title="bool" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.bool} title="boolArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.integer} title="integer" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.integer} title="integerArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.number} title="number" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.number} title="numberArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.object} title="object" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.object} title="objectArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.string} title="string" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type={APIFieldType.string} title="stringArray" isParentArray={true} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle type="boolean" title="boolean" />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldTitle title="empty" />
      </ProCard>
    </ProCard>
  );
};

export default Demo;
