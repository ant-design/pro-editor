import { ProCard } from '@ant-design/pro-components';
import { APIFieldType, FieldIcon } from '@ant-design/pro-editor';

const Demo = () => {
  return (
    <ProCard ghost gutter={[8, 8]} wrap>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.any} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.anyArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.bool} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.boolArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.integer} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.integerArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.number} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.numberArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.object} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.objectArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.string} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.stringArray} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon type={APIFieldType.array} />
      </ProCard>
      <ProCard layout="center" bordered colSpan={4}>
        <FieldIcon />
      </ProCard>
    </ProCard>
  );
};

export default Demo;
